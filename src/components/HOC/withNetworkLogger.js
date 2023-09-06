import React, { useState, useEffect, useCallback } from 'react';
import { useDebugContext } from '../../context/DebugContext';
import {
  convertMillisecondsToHumanReadableFormat,
  parseJSONValue,
} from '../../utils';

const withNetworkLogger = (WrappedComponent) => {
  const NetworkLogger = (props) => {
    const [requests, setRequests] = useState(new Map());
    const { addNetworkRequest } = useDebugContext();

    const handleNetworkResponse = useCallback(
      async (response) => {
        try {
          let request = null;
          if (response instanceof Response) {
            const { url, method, body, startTime } = requests
              .keys()
              .next().value;
            request = { url, method, body, startTime };
          } else {
            request = Array.from(requests.keys()).find(
              (r) =>
                r.url === response.url && r.method === response.request?.method,
            );
          }
          // console.log(request, response);
          if (request) {
            const timeElapsed = convertMillisecondsToHumanReadableFormat(
              Date.now() - request.startTime,
            );
            const responseData = {
              status: response ? response.status : null,
              statusText: response ? response.statusText : null,
              headers: response
                ? [...response.headers].reduce(
                    (acc, curr) => ({ ...acc, [curr[0]]: curr[1] }),
                    {},
                  )
                : null,
            };

            const contentType = responseData.headers
              ? responseData.headers['content-type']
              : '';
            console.log('contentType', contentType);
            console.log('response', response);
            if (contentType && contentType.includes('application/json')) {
              responseData.body = response ? await response.json() : null;
            } else {
              responseData.body = response ? await response.text() : null;
            }
            addNetworkRequest({ request, response: responseData, timeElapsed });
            setRequests((prevRequests) => {
              const updatedRequests = new Map(prevRequests);
              updatedRequests.set(request, {
                response: responseData,
                timeElapsed,
              });
              return updatedRequests;
            });
          }
        } catch (error) {
          console.error('error', error);
          throw error;
        }
      },
      [requests, addNetworkRequest],
    );

    useEffect(() => {
      const originalFetch = window.fetch;

      const handleResponse = (response) => {
        const clonedResponse = response.clone();
        handleNetworkResponse(clonedResponse);
        return response;
      };

      const fetchWithContext = window.fetch.bind(window);

      window.fetch = (...args) => {
        console.log(args);
        const [url, options] = args;
        const startTime = Date.now();
        const request = {
          method: options && options.method ? options.method : 'GET',
          url,
          body: options && options.body ? options.body : null,
          startTime,
        };
        setRequests((prevRequests) => new Map(prevRequests.set(request, null)));

        return fetchWithContext(url, options)
          .then(handleResponse)
          .catch((error) => {
            console.log('error', error);
            handleNetworkResponse(error);
            throw error;
          });
      };

      const originalOpen = window.XMLHttpRequest.prototype.open;
      const originalSend = window.XMLHttpRequest.prototype.send;

      const handleXmlHttpRequest = (xhr, body) => {
        const method = xhr._method ? xhr._method : 'GET';
        const url = xhr._url ? xhr._url : window.location.href;
        const startTime = Date.now();
        const request = {
          method,
          url,
          body: parseJSONValue(body),
          startTime,
        };
        setRequests((prevRequests) => new Map(prevRequests.set(request, null)));
        xhr.addEventListener('load', () => {
          const xhrHeadersString = xhr.getAllResponseHeaders();
          const xhrHeadersArray = xhrHeadersString
            .split('\r\n')
            .filter(Boolean);
          const fetchHeaders = [];
          xhrHeadersArray.forEach(function (line) {
            const parts = line.split(': ');
            const name = parts.shift().trim();
            const value = parts.join(': ').trim();
            fetchHeaders.push([name, value]);
          });
          // Get the request URL
          const requrl = xhr.url;

          // Get the request method
          const method = xhr.method;

          // Get the request body
          const body = xhr.responseText;
          console.log('xhr', xhr, requrl, method, body);

          const response = {
            status: xhr.status,
            statusText: xhr.statusText,
            url,
            ok: xhr.status >= 200 && xhr.status < 300,
            headers: fetchHeaders,
            request,
            json: async () => parseJSONValue(xhr.response),
            text: async () => xhr.responseText,
          };
          handleNetworkResponse(response);
        });

        xhr.addEventListener('error', () => {
          const error = new Error('Network error');
          error.request = xhr;
          handleNetworkResponse(error);
        });

        originalSend.apply(xhr, [body]);
      };

      window.XMLHttpRequest.prototype.send = function (body = null) {
        console.log('this', this);
        this._url = this._url || window.location.href;
        this._method = this._method || 'GET';
        handleXmlHttpRequest(this, body);
      };
      window.XMLHttpRequest.prototype.open = function (...args) {
        this._url = args[1] || window.location.href;
        this._method = args[0] || 'GET';
        originalOpen.apply(this, args);
      };

      return () => {
        window.fetch = originalFetch;
        window.XMLHttpRequest.prototype.open = originalOpen;
        window.XMLHttpRequest.prototype.send = originalSend;
      };
    }, [handleNetworkResponse]);

    return <WrappedComponent {...props} requests={requests} />;
  };

  return NetworkLogger;
};

export default withNetworkLogger;
