import crossIcon from '../icons/svg/cross.svg';
import settingsIcon from '../icons/svg/settings.svg';
import React, { Suspense, useEffect, useState } from 'react';

// const Storage = lazy(() => import("./Storage"));
// import Storage from "./Storage";

function DebugOverlay() {
  const [mounted, setMounted] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [storageComponent, setStorageComponent] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const loadStorageComponent = async () => {
    console.log('window', window);
    if (!storageComponent) {
      const { default: StorageComponent } = await import('./Storage');
      setStorageComponent(<StorageComponent />);
    }
    setOpenPopup(true);
  };

  if (!mounted) return <React.Fragment></React.Fragment>;

  return openPopup ? (
    <Suspense fallback={<React.Fragment></React.Fragment>}>
      <div className="fixed bottom-0 max-h-mobile sm:max-h-[calc(100vh-theme(space.8))] overflow-auto no-scrollbar right-0 w-mobile sm:w-1/2 sm:m-4 bg-white shadow-xl rounded-lg z-50">
        <div className="sticky top-0 z-10 text-center bg-white/50 backdrop-blur py-4">
          <div className="relative">
            <h1 className="text-xl font-medium">App Settings</h1>
            <img
              className="absolute top-0.5 right-4"
              src={crossIcon}
              width={24}
              height={24}
              alt="Open popup icon"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpenPopup(false);
              }}
            />
          </div>
        </div>
        <div className="px-4 pb-4">{storageComponent}</div>
      </div>
    </Suspense>
  ) : (
    <div className="fixed bottom-0 right-0 m-5 z-50">
      <img
        src={settingsIcon}
        width={24}
        height={24}
        alt="Open popup icon"
        onClick={loadStorageComponent}
      />
    </div>
  );
}

export default DebugOverlay;
