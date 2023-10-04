import * as React from "react";
import { useDebugContext } from "../../context/DebugContext";
import {
  convertMillisecondsToHumanReadableFormat,
  parseJSONValue
} from "../../utils";

const withNetworkLogger = (WrappedComponent) => {
  const NetworkLogger = (props) => {
    const [requests, setRequests] = React.useState(new Map());
    const { addConsoleLog, addNetworkRequest } = useDebugContext();

    const handleNetworkResponse = React.useCallback(
      async (response, request) => {
        try {
          // let request = null;
          // if (response instanceof Response) {
          //   const { url, method, body, startTime } = requests
          //     .keys()
          //     .next().value;
          //   request = { url, method, body, startTime };
          // } else {
          //   request = Array.from(requests.keys()).find(
          //     (r) =>
          //       r.url === response.url && r.method === response.request?.method
          //   );
          // }
          // console.log(request, response);
          if (request) {
            const timeElapsed = convertMillisecondsToHumanReadableFormat(
              Date.now() - request.startTime
            );
            const responseData = {};
            if (response?.status) {
              responseData.status = parseJSONValue(response.status);
            }
            if (response?.statusText) {
              responseData.statusText = parseJSONValue(response.statusText);
            }
            if (response?.headers) {
              responseData.headers = [...response.headers].reduce(
                (acc, curr) => ({ ...acc, [curr[0]]: curr[1] }),
                {}
              );
            }

            const contentType = responseData.headers
              ? responseData.headers["content-type"]
              : "";
            // console.log('contentType', contentType);
            // console.log('response', response);
            if (contentType?.includes("application/json")) {
              responseData.body = response ? await response.json() : null;
            } else {
              responseData.body = response ? await response.text() : null;
            }
            addNetworkRequest({ request, response: responseData, timeElapsed });
            // setRequests((prevRequests) => {
            //   const updatedRequests = new Map(prevRequests);
            //   updatedRequests.set(request, {
            //     response: responseData,
            //     timeElapsed
            //   });
            //   return updatedRequests;
            // });
          }
        } catch (error) {
          // console.error('error', error);
          // throw error;
        }
      },
      [
        // requests,
        addNetworkRequest
      ]
    );

    React.useEffect(() => {
      const originalFetch = window.fetch;

      const handleResponse = (response, request) => {
        const clonedResponse = response.clone();
        handleNetworkResponse(clonedResponse, request);
        return response;
      };

      const fetchWithContext = window.fetch.bind(window);

      window.fetch = (...args) => {
        const [url, options = {}] = args;
        const startTime = Date.now();
        const request = {
          method: options.method || "GET",
          url,
          startTime
        };
        if (options.body) {
          request.body = parseJSONValue(options.body);
        }
        // setRequests((prevRequests) => new Map(prevRequests.set(request, null)));

        return fetchWithContext(url, options)
          .then((response) => handleResponse(response, request))
          .catch((error) => {
            // console.log('error', error);
            handleNetworkResponse(error);
            throw error;
          });
      };

      const originalOpen = window.XMLHttpRequest.prototype.open;
      const originalSend = window.XMLHttpRequest.prototype.send;

      const handleXmlHttpRequest = (xhr, body) => {
        const method = xhr._method ? xhr._method : "GET";
        const url = xhr._url ? xhr._url : window.location.href;
        const startTime = Date.now();
        const request = {
          method,
          url,
          startTime
        };
        if (body) {
          request.body = parseJSONValue(body);
        }
        // setRequests((prevRequests) => new Map(prevRequests.set(request, null)));
        xhr.addEventListener("load", () => {
          const xhrHeadersString = xhr.getAllResponseHeaders();
          const xhrHeadersArray = xhrHeadersString
            .split("\r\n")
            .filter(Boolean);
          const fetchHeaders = [];
          xhrHeadersArray.forEach(function (line) {
            const parts = line.split(": ");
            const name = parts.shift().trim();
            const value = parts.join(": ").trim();
            fetchHeaders.push([name, value]);
          });

          const response = {
            status: xhr.status,
            statusText: xhr.statusText,
            url,
            ok: xhr.status >= 200 && xhr.status < 300,
            headers: fetchHeaders,
            request,
            json: async () => parseJSONValue(xhr.response),
            text: async () => xhr.responseText
          };
          handleNetworkResponse(response, request);
        });

        xhr.addEventListener("error", () => {
          const error = new Error("Network error");
          error.request = xhr;
          handleNetworkResponse(error, request);
        });

        originalSend.apply(xhr, [body]);
      };

      window.XMLHttpRequest.prototype.send = function (body = null) {
        this._url = this._url || window.location.href;
        this._method = this._method || "GET";
        handleXmlHttpRequest(this, body);
      };
      window.XMLHttpRequest.prototype.open = function (...args) {
        this._url = args[1] || window.location.href;
        this._method = args[0] || "GET";
        originalOpen.apply(this, args);
      };

      return () => {
        window.fetch = originalFetch;
        window.XMLHttpRequest.prototype.open = originalOpen;
        window.XMLHttpRequest.prototype.send = originalSend;
      };
    }, [handleNetworkResponse]);

    React.useEffect(() => {
      const originalConsole = window.console;
      window.console = {
        ...originalConsole,
        log: (...args) => {
          originalConsole.log(...args);
          addConsoleLog({ type: "log", message: args });
        },
        info: (...args) => {
          originalConsole.info(...args);
          addConsoleLog({ type: "info", message: args });
        },
        // debug: (...args) => {
        //   originalConsole.debug(...args);
        //   addConsoleLog({ type: 'debug', message: args });
        // },
        warn: (...args) => {
          originalConsole.warn(...args);
          addConsoleLog({ type: "warn", message: args });
        },
        error: (...args) => {
          originalConsole.error(...args);
          addConsoleLog({ type: "error", message: args });
        }
      };
      return () => {
        window.console = originalConsole;
      };
    }, []);

    return <WrappedComponent {...props} requests={requests} />;
  };

  return NetworkLogger;
};

export default withNetworkLogger;
