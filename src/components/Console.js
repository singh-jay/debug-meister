import React, { useState, useEffect, useMemo, useDeferredValue } from 'react';
import carrotIcon from '../icons/svg/carrot.svg';
import trashIcon from '../icons/svg/trash.svg';

const getErrorColorClass = (error) => {
  switch (error.type) {
    case 'error':
      return 'text-red-500 dark:text-red-400';
    case 'warn':
      return 'text-amber-500 dark:text-amber-400';
    default:
      return 'text-slate-500 dark:text-slate-400';
  }
};

const Console = () => {
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState('');
  const deferredFilterValue = useDeferredValue(filter);
  const [openSection, setOpenSection] = useState(false);

  useEffect(() => {
    const originalConsole = window.console;
    window.console = {
      ...originalConsole,
      log: (...args) => {
        originalConsole.log(...args);
        setLogs((logs) => [...logs, { type: 'log', message: args }]);
      },
      warn: (...args) => {
        originalConsole.warn(...args);
        setLogs((logs) => [...logs, { type: 'warn', message: args }]);
      },
      error: (...args) => {
        originalConsole.error(...args);
        setLogs((logs) => [...logs, { type: 'error', message: args }]);
      },
    };
    return () => {
      window.console = originalConsole;
    };
  }, []);

  const handleFilterChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFilter(e.target.value);
  };

  const filteredLogs = useMemo(
    () =>
      logs.filter((log) => {
        const message = log.message.join(' ');
        return message
          .toLowerCase()
          .includes(deferredFilterValue.toLowerCase());
      }),
    [deferredFilterValue, logs],
  );

  return (
    <details
      className="group"
      open={openSection}
      onToggle={(e) => {
        setOpenSection(e.target.open);
      }}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
        <h1 className="text-slate-900 text-lg font-medium">Console</h1>
        <div className="flex flex-1 mx-1 sm:mx-3 gap-2 items-center justify-between">
          {openSection && filteredLogs.length > 0 && (
            <>
              <input
                type="text"
                placeholder="Filter logs..."
                value={filter}
                onChange={handleFilterChange}
                className="appearance-none bg-slate-100 border-none text-slate-500 dark:text-slate-400 rounded-md mt-2 py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
              <div
                className="p-1.5 mt-1.5 hover:bg-slate-200 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.clear();
                  setLogs([]);
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
      <div className="group-open:animate-fadeIn mt-3 text-neutral-600">
        <div className="divide-y divide-slate-300 border-t-2 border-slate-200 -mb-2 text-left">
          {filteredLogs.map((log, index) => (
            <div key={index} className={`py-2 ${getErrorColorClass(log)}`}>
              {log.message.map((part, index) => (
                <span key={index} className="break-words">
                  {part.toString()}
                </span>
              ))}
            </div>
          ))}
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

export default Console;
