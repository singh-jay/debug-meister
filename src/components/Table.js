import * as React from "react";

import { useIsMobile } from "../hooks/useIsMobile";
import checkIcon from "../icons/svg/check.svg";
import copyIcon from "../icons/svg/copy.svg";
import trashIcon from "../icons/svg/trash.svg";
import TableRow from "./TableRow";

const EditableInput = ({ value, onChange, onBlur }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    className="appearance-none bg-slate-50 text-slate-500 dark:text-slate-400 border border-slate-300 rounded w-full py-1 px-2 focus:outline-none  focus:border-slate-500 focus:bg-slate-100"
  />
);

const Table = ({
  data,
  storageType,
  handleAddItem,
  handleDeleteItem,
  copyContent
}) => {
  const [editedIndex, setEditedIndex] = React.useState("");
  const [editedValue, setEditedValue] = React.useState("");
  const [showActionButtons, setShowActionButtons] = React.useState("");
  const [copying, setCopying] = React.useState("");
  const [mounted, setMounted] = React.useState(false);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // useEffect(() => {
  // 	let vh = window.innerWidth;
  // 	if (vh >= 640) {
  // 		setIsMobile(false);
  // 	} else {
  // 		setIsMobile(true);
  // 	}
  // 	const resizeHandler = () => {
  // 		let vh = window.innerWidth;
  // 		// console.log("vh", vh);
  // 		if (vh >= 640) {
  // 			setIsMobile(false);
  // 		} else {
  // 			setIsMobile(true);
  // 		}
  // 	};
  // 	window.addEventListener("resize", resizeHandler);

  // 	return () => {
  // 		window.removeEventListener("resize", resizeHandler);
  // 	};
  // }, []);

  React.useEffect(() => {
    const scrollHandler = () => {
      if (showActionButtons !== "") {
        setShowActionButtons("");
        setCopying("");
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [showActionButtons]);

  const handleDoubleClick = (index, value) => {
    setEditedIndex(index);
    setEditedValue(value);
  };

  const handleInputBlur = (type, _key) => {
    if (type === "VALUE") {
      const oldDataIndex = data.findIndex(([key]) => key === _key);
      console.log(storageType, _key, editedValue, oldDataIndex);
      handleAddItem(storageType, _key, editedValue, {
        isUpdateFlow: true,
        updateIndex: oldDataIndex,
        checkDuplicateKey: false
      });
    } else {
      const newKey = editedValue;
      const oldDataIndex = data.findIndex(([key]) => key === _key);
      const newKeyValue = data[oldDataIndex][1];
      handleAddItem(storageType, newKey, newKeyValue, {
        isUpdateFlow: true,
        updateIndex: oldDataIndex,
        deleteKey: _key
      });
    }
    setEditedIndex("");
    setEditedValue("");
  };

  const handleInputChange = (event) => {
    setEditedValue(event.target.value);
  };

  const onRowClickHandler = (val) => {
    if (isMobile) {
      setShowActionButtons(val);
    }
  };

  const onPointerHandler = (val) => {
    if (!isMobile) {
      setShowActionButtons(val);
      if (!val) setCopying("");
    }
  };

  const handleCopy = React.useCallback((key, value) => {
    copyContent([[key, value]]);
    setCopying(key);
    setTimeout(() => {
      setCopying((v) => (v ? "" : v));
    }, 1500);
  }, []);

  if (!mounted) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-auto gap-x-3 sm:gap-x-0 overflow-hidden border-t-2 border-slate-200 -mb-2">
      {/* <div className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Key</div>
			<div className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Value</div> */}
      {data.map(([key, value]) => {
        return (
          <React.Fragment key={`${storageType}_${key}`}>
            <div
              className="border-b border-transparent sm:border-slate-200 px-1 py-0.5 text-left sm:p-4 text-slate-800 dark:text-slate-400"
              onDoubleClick={() => handleDoubleClick(`key_${key}`, key)}
              onPointerEnter={() => onPointerHandler(`${key}`)}
              onPointerLeave={() => onPointerHandler("")}
              onClick={() => onRowClickHandler(`${key}`)}
            >
              {editedIndex === `key_${key}` ? (
                <EditableInput
                  autofocus
                  value={editedValue}
                  onChange={handleInputChange}
                  onBlur={() => handleInputBlur("KEY", key)}
                />
              ) : (
                key
              )}
            </div>
            <div
              className="relative border-b border-slate-200 mb-2 sm:mb-0 text-left px-1 py-0.5 sm:p-4 text-slate-800 dark:text-slate-400 overflow-hidden"
              onDoubleClick={() => handleDoubleClick(`value_${key}`, value)}
              onPointerEnter={() => onPointerHandler(`${key}`)}
              onPointerLeave={() => onPointerHandler("")}
              onClick={() => onRowClickHandler(`${key}`)}
            >
              {editedIndex === `value_${key}` ? (
                <EditableInput
                  autofocus
                  value={editedValue}
                  onChange={handleInputChange}
                  onBlur={() => handleInputBlur("VALUE", key)}
                />
              ) : (
                <TableRow value={value} />
              )}
              {showActionButtons === `${key}` && editedIndex === "" && (
                <div className="absolute z-10 bottom-1 sm:bottom-3 right-0 flex gap-1">
                  <div
                    className="p-1.5 bg-slate-200 rounded-md"
                    onClick={() => handleDeleteItem(storageType, key)}
                  >
                    <img
                      src={trashIcon}
                      width={18}
                      height={18}
                      alt="delete row"
                    />
                  </div>
                  <div
                    className="p-1.5 bg-slate-200 rounded-md"
                    onClick={() => handleCopy(key, value)}
                  >
                    <img
                      src={copying === key ? checkIcon : copyIcon}
                      className={copying === key ? "animate-copy-button" : ""}
                      key="check"
                      width={17}
                      height={17}
                      alt="copy row"
                    />
                  </div>
                </div>
              )}
            </div>
          </React.Fragment>
        );
      })}
      {data.length === 0 && (
        <div className="w-full border-b border-transparent sm:border-slate-200 p-2 sm:col-span-2 text-slate-500 dark:text-slate-400 text-center">
          No Data
        </div>
      )}
    </div>
  );
};

export default Table;
