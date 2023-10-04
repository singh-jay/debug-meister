import * as React from "react";
import ScreenRecording from "./ScreenRecording";

import carrotIcon from "../../icons/svg/carrot.svg";
import trashIcon from "../../icons/svg/trash.svg";
import TableRow from "../TableRow";

const getErrorColorClass = (error) => {
  switch (error.type) {
    case "error":
      return "text-red-500 dark:text-red-400";
    case "warn":
      return "text-amber-500 dark:text-amber-400";
    default:
      return "text-slate-500 dark:text-slate-400";
  }
};

const ScreenRecordingContainer = () => {
  const [openSection, setOpenSection] = React.useState(false);
  const [isInputFocused, setIsInputFocused] = React.useState(false);
  const [filter, setFilter] = React.useState("");

  const filteredLogs = [];

  return (
    <details
      className="group"
      open={openSection}
      // onToggle={(e) => {
      //   setOpenSection(e.target.open);
      // }}
    >
      <summary
        className="flex cursor-pointer list-none items-center justify-between font-medium"
        onClick={(e) => {
          if (isInputFocused) e.preventDefault();
        }}
      >
        <h1 className="text-slate-900 text-lg font-medium">Screen Recording</h1>
        <div className="flex flex-1 mx-1 sm:mx-3 gap-2 items-center justify-between">
          {openSection && filteredLogs.length > 0 && (
            <>
              <div
                className="p-1.5 mt-1.5 hover:bg-slate-200 rounded-md"
                // onClick={(e) => {
                //   e.preventDefault();
                //   e.stopPropagation();
                //   console.clear();
                //   clearConsoleLogs();
                // }}
              >
                <img
                  src={trashIcon}
                  width={24}
                  height={24}
                  alt="clear console"
                />
              </div>
            </>
          )}
        </div>
        <span className="transition group-open:rotate-180 p-1 rounded-full hover:bg-slate-200">
          <img
            src={carrotIcon}
            width={24}
            height={24}
            alt="open icon"
            // onClick={(e) => {
            //   e.preventDefault();
            //   setOpenSection(!openSection);
            // }}
          />
        </span>
      </summary>
      <div className="group-open:animate-fadeIn mt-3 text-neutral-600">
        <ScreenRecording
          screen={true}
          audio={false}
          video={false}
          downloadRecordingPath="Screen_Recording_Demo"
          downloadRecordingType="mp4"
          emailToSupport="support@xyz.com"
        />
        <div className="divide-y divide-slate-300 border-t-2 border-slate-200 -mb-2 text-left">
          {/* {filteredLogs.map((log, index) => (
            <div key={index} className={`py-2 flex ${getErrorColorClass(log)}`}>
              {log.message.map((part, _index) => (
                // <span key={index} className="break-words">
                //   {JSONStringify(part)}
                // </span>
                <TableRow
                  key={`${index}_${_index}`}
                  value={part}
                  parseJSON={false}
                />
              ))}
            </div>
          ))} */}
          {filteredLogs.length === 0 && (
            <div className="w-full border-b border-transparent sm:border-slate-200 p-2 sm:col-span-2 text-slate-500 dark:text-slate-400 text-center">
              No Data
            </div>
          )}
        </div>
      </div>
    </details>
  );
};

export default ScreenRecordingContainer;
