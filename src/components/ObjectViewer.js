import * as React from 'react';

function ObjectViewer({ data }) {
  const [isOpen, setIsOpen] = React.useState({});

  const toggleOpen = (key) => {
    setIsOpen((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };

  const renderData = (data) => {
    if (typeof data !== 'object' || data === null) {
      return data;
    }

    if (Array.isArray(data)) {
      return data.map((item, index) => (
        <div key={index} className="ml-4">
          {renderData(item)}
        </div>
      ));
    }

    return Object.entries(data).map(([key, value]) => (
      <div key={key}>
        {typeof value === 'object' ? (
          <div onClick={() => toggleOpen(key)} className="cursor-pointer">
            <span className="mr-1">{isOpen[key] ? '\u25B8' : '\u25BE'}</span>
            {key}
          </div>
        ) : (
          <div>
            {key}:{'  '}
            {value}
          </div>
        )}
        {isOpen[key] && <div className="ml-4">{renderData(value)}</div>}
      </div>
    ));
  };

  return <div>{renderData(data)}</div>;
}

export default ObjectViewer;
