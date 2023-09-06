'use client';

import './styles/globals.css';

import { Suspense, lazy } from 'react';

const DebugContextProvider = lazy(() =>
  import(
    /* webpackChunkName: "DebugContextProviderChunk" */ './context/DebugProvider'
  ),
);

const __dev__ = process.env.NODE_ENV !== 'production';

export default function DebugProvider({ children }) {
  return __dev__ ? (
    <Suspense fallback={<p>Loading...</p>}>
      <DebugContextProvider>{children}</DebugContextProvider>
    </Suspense>
  ) : (
    children
  );
}
