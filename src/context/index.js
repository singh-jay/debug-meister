"use client";

import * as React from "react";

const DebugContextProvider = React.lazy(
  () =>
    import(
      /* webpackChunkName: "DebugContextProviderChunk" */ "./DebugProvider"
    )
);

const __dev__ = process.env.NODE_ENV !== "production";

export default function DebugProvider({ children, ...restProps }) {
  return __dev__ ? (
    <React.Suspense fallback={null}>
      <DebugContextProvider {...restProps}>{children}</DebugContextProvider>
    </React.Suspense>
  ) : (
    children
  );
}
