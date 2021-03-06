import React, { Suspense, lazy } from 'react';

const loadable = (importFunc, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importFunc);

  return (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props}></LazyComponent>
    </Suspense>
  );
};

export default loadable;
