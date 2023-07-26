import { createContext, useContext } from 'react';

export const DebugContext = createContext({});

export const useDebugContext = () => useContext(DebugContext);
