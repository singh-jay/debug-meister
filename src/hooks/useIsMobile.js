import { useSyncExternalStore } from 'react';

// A memoized constant fn prevents unsubscribe/resubscribe
// In practice it is not a big deal
function subscribe(onStoreChange) {
  window?.addEventListener('resize', onStoreChange);
  return () => window?.removeEventListener('resize', onStoreChange);
}

function getSnapshot() {
  return window?.innerWidth < 640 ? true : false;
}

export function useIsMobile() {
  return useSyncExternalStore(subscribe, getSnapshot);
}
