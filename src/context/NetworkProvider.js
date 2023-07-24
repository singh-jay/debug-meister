'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { NetworkContext } from './NetworkContext';
import withNetworkLogger from '../components/HOC/withNetworkLogger';
import DebugOverlay from '../components/DebugOverlay';

const Child = ({ children }) => (
  <>
    <DebugOverlay />
    {children}
  </>
);

const WrappedComponent = withNetworkLogger(Child);

export const NetworkProvider = ({ children }) => {
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

  if (!mounted) return null;

  return (
    <NetworkContext.Provider
      value={{ networkRequests, addNetworkRequest, clearNetworkRequests }}
    >
      <WrappedComponent>{children}</WrappedComponent>
    </NetworkContext.Provider>
  );
};
