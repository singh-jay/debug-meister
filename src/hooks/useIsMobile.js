import * as React from 'react';

// A memoized constant fn prevents unsubscribe/resubscribe
// In practice, it is not a big deal
function subscribe(onStoreChange) {
  window.addEventListener('resize', onStoreChange);
  return () => window.removeEventListener('resize', onStoreChange);
}

function getSnapshot() {
  return window.innerWidth < 640;
}

export function useIsMobile() {
  // React 18 version
  // return useSyncExternalStore(subscribe, getSnapshot);

  // adding older React 16 support for now
  const [isMobile, setIsMobile] = React.useState(getSnapshot());

  React.useEffect(() => {
    let unsubscribe;

    // if (React.useSyncExternalStore) {
    //   unsubscribe = React.useSyncExternalStore(
    //     (onStoreChange) => {
    //       const removeListener = subscribe(onStoreChange);
    //       return () => {
    //         if (removeListener) {
    //           removeListener();
    //         }
    //       };
    //     },
    //     () => {
    //       setIsMobile(getSnapshot());
    //     },
    //   );
    // } else {
    const onStoreChange = () => {
      setIsMobile(getSnapshot());
    };
    unsubscribe = subscribe(onStoreChange);
    // }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return isMobile;
}
