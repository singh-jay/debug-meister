import React, { useCallback, useEffect, useState } from 'react';
import { DebugContext } from './DebugContext';
import withNetworkLogger from '../components/HOC/withNetworkLogger';
import DebugOverlay from '../components/DebugOverlay';

const Child = ({ children }) => (
  <>
    <DebugOverlay />
    {children}
  </>
);

const WrappedComponent = withNetworkLogger(Child);

const DebugProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [networkRequests, setNetworkRequests] = useState([]);

  const addNetworkRequest = useCallback((request) => {
    setNetworkRequests((prevNetworkRequests) => [
      ...prevNetworkRequests,
      request,
    ]);
  }, []);

  const clearNetworkRequests = useCallback(() => {
    setNetworkRequests([]);
  }, []);

  useEffect(() => setMounted(true), []);

  if (!mounted) return children;

  return (
    <DebugContext.Provider
      value={{ networkRequests, addNetworkRequest, clearNetworkRequests }}
    >
      <WrappedComponent>{children}</WrappedComponent>
    </DebugContext.Provider>
  );
};

export default DebugProvider;
