import * as React from "react";

import DebugOverlay from "../components/DebugOverlay";
import withNetworkLogger from "../components/HOC/withNetworkLogger";
import { DebugContext } from "./DebugContext";

const Child = ({ children, ...restProps }) => (
  <>
    <DebugOverlay {...restProps} />
    {children}
  </>
);

const WrappedComponent = withNetworkLogger(Child);

const DebugProvider = ({ children, ...restProps }) => {
  // const [mounted, setMounted] = React.useState(false);
  const [networkRequests, setNetworkRequests] = React.useState([]);
  const [consoleLogs, setConsoleLogs] = React.useState([]);

  const memoisedNetworkRequests = React.useMemo(
    () => networkRequests,
    [networkRequests]
  );

  const memoisedConsoleLogs = React.useMemo(() => consoleLogs, [consoleLogs]);

  const addNetworkRequest = React.useCallback((request) => {
    setNetworkRequests((prevNetworkRequests) => [
      ...prevNetworkRequests,
      request
    ]);
  }, []);

  const clearNetworkRequests = React.useCallback(() => {
    setNetworkRequests([]);
  }, []);

  const addConsoleLog = React.useCallback((log) => {
    // console.debug("console add", log);
    setConsoleLogs((prevConsoleLogs) => [...prevConsoleLogs, log]);
  }, []);

  const clearConsoleLogs = React.useCallback(() => {
    setConsoleLogs([]);
  }, []);

  // React.useEffect(() => setMounted(true), []);

  // if (!mounted) return children;

  return (
    <DebugContext.Provider
      value={{
        networkRequests: memoisedNetworkRequests,
        addNetworkRequest,
        clearNetworkRequests,
        consoleLogs: memoisedConsoleLogs,
        addConsoleLog,
        clearConsoleLogs
      }}
    >
      <WrappedComponent {...restProps}>{children}</WrappedComponent>
    </DebugContext.Provider>
  );
};

export default DebugProvider;
