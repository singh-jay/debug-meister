import * as React from 'react';

export const DebugContext = React.createContext({});

export const useDebugContext = () => React.useContext(DebugContext);
