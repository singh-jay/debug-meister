import * as React from "react";
import crossIcon from "../icons/svg/cross.svg";
import settingsIcon from "../icons/svg/settings.svg";

import "../styles/globals.css";

const Storage = React.lazy(
  () => import(/* webpackChunkName: "DebugOverlayChunk" */ "./Storage")
);

const getOverlayPosition = (position = "bottom-right") => {
  switch (position) {
    case "top-left":
      return "top-0 left-0";
    case "top-right":
      return "top-0 right-0";
    case "bottom-left":
      return "bottom-0 left-0";
    default:
      return "bottom-0 right-0";
  }
};

export default function DebugOverlay(props) {
  const [mounted, setMounted] = React.useState(false);
  const [openPopup, setOpenPopup] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return openPopup ? (
    <React.Suspense>
      <div
        className={`max-h-[100lvh] sm:max-h-[calc(100vh-theme(space.8))] overflow-auto no-scrollbar w-[100lvw] sm:w-1/2 sm:m-4 bg-white shadow-xl rounded-lg z-50 fixed ${getOverlayPosition(
          props.position
        )}`}
      >
        <div className="sticky top-0 z-10 text-center bg-white/50 backdrop-blur drop-shadow-xl py-5">
          <div className="relative">
            <h1 className="text-slate-900 text-xl font-medium">App Settings</h1>
            <span className="absolute top-0.5 right-4 p-1 hover:rounded-full hover:bg-slate-200">
              <img
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
            </span>
          </div>
        </div>
        <div className="px-4 pb-4">
          <Storage />
        </div>
      </div>
    </React.Suspense>
  ) : (
    <div
      className={`m-5 z-50 fixed w-8 h-8 rounded-full flex justify-center items-center bg-slate-200 hover:bg-slate-300 ${getOverlayPosition(
        props.position
      )}`}
    >
      <img
        src={settingsIcon}
        width={24}
        height={24}
        alt="Open popup icon"
        onClick={() => setOpenPopup(true)}
      />
    </div>
  );
}
