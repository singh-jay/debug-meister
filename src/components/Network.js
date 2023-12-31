import * as React from "react";
import { useDebugContext } from "../context/DebugContext";
import carrotIcon from "../icons/svg/carrot.svg";
import trashIcon from "../icons/svg/trash.svg";
import TableRow from "./TableRow";

export const Network = () => {
  const { networkRequests, clearNetworkRequests } = useDebugContext();
  const [openSection, setOpenSection] = React.useState(false);
  const [isInputFocused, setIsInputFocused] = React.useState(false);
  const [filter, setFilter] = React.useState("");

  const handleFilterChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFilter(e.target.value);
  };

  const filteredNetworkRequests = React.useMemo(() => {
    return networkRequests.filter(({ request }) =>
      request.url.includes(filter.toLowerCase())
    );
  }, [filter, networkRequests]);

  return (
    <details
      className="group"
      open={openSection}
      onToggle={(e) => {
        setOpenSection(e.target.open);
      }}
    >
      <summary
        className="flex cursor-pointer list-none items-center justify-between font-medium"
        onClick={(e) => {
          if (isInputFocused) e.preventDefault();
        }}
      >
        <h1 className="text-slate-900 text-lg font-medium">Network</h1>
        <div className="flex flex-1 mx-1 sm:mx-3 gap-2 items-center justify-between">
          {openSection && (
            <>
              <input
                type="text"
                placeholder="Filter requests..."
                value={filter}
                onChange={handleFilterChange}
                onFocus={() => setIsInputFocused(true)}
                onBlur={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsInputFocused(false);
                }}
                className="appearance-none bg-slate-100 border-none text-slate-500 dark:text-slate-400 rounded-md mt-2 py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
              <div
                className="p-1.5 mt-1.5 hover:bg-slate-200 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  clearNetworkRequests();
                  setOpenSection(false);
                }}
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
            onClick={(e) => {
              e.preventDefault();
              setOpenSection(!openSection);
            }}
          />
        </span>
      </summary>
      <div className="group-open:animate-fadeIn mt-3 text-neutral-600 text-left">
        <div className="divide-y divide-slate-300 border-t-2 border-slate-200 -mb-2">
          {filteredNetworkRequests.map((row, index) => (
            <div
              key={index}
              className={`px-4 py-2 ${index % 2 === 0 ? "bg-slate-100" : ""}`}
            >
              <span>Url: </span>
              <TableRow
                value={row.request.url.split("/").pop() || "/"}
                overflowAllowed={false}
                parseJSON={false}
              />

              <span>Request: </span>
              <TableRow
                value={row.request}
                overflowAllowed={false}
                parseJSON={false}
              />

              <span>Response: </span>
              <TableRow
                value={row.response}
                overflowAllowed={false}
                parseJSON={false}
              />

              <span>Time Elapsed: </span>
              <TableRow
                value={row.timeElapsed}
                overflowAllowed={false}
                parseJSON={false}
              />
            </div>
          ))}
          {filteredNetworkRequests.length === 0 && (
            <div className="w-full border-b-2 border-transparent sm:border-slate-200 p-2 sm:col-span-2 text-slate-500 dark:text-slate-400 text-center">
              No Data
            </div>
          )}
        </div>
      </div>
    </details>
  );
};
