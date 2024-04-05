function TableToDisplayBackendData(data, title) {
  const removeUnderscoreAndMakeTitleCase = (str) => {
    return str
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const renderRow = (key, value, depth) => {
    const padding = depth * 5; // Adjust the multiplier as needed
    const depthStyle = { paddingLeft: `${padding}px` };

    if (typeof value === "object" && value !== null) {
      return (
        <div key={`key-${key}`}>
          <div
            id={`key-${key}`}
            style={depthStyle}
            className="font-normal text-violet-900 py-1  text-[18px]"
          >
            <h1 className="font-semibold text-left">
              {removeUnderscoreAndMakeTitleCase(key)}
            </h1>
          </div>
          {renderAllRows(value, depth + 1)}
        </div>
      );
    } else {
      return key !== "total" ? (
        <div
          key={key}
          style={depthStyle}
          className="flex justify-between items-center"
        >
          <h2 className="font-semibold">
            {removeUnderscoreAndMakeTitleCase(key)}
          </h2>
          <h2 className="font-semibold ">{value}</h2>
        </div>
      ) : null;
    }
  };

  const renderAllRows = (obj, depth) => {
    if (obj) {
      return (
        <div key={"key-" + depth}>
          {Object.entries(obj)?.map(([key, value]) =>
            renderRow(key, value, depth)
          )}
          {obj &&
            "total" in obj && ( // Render "Total" row separately
              <div
                key={"key-" + depth}
                className="w-full py-2 justify-between items-center flex px-2"
              >
                <h1 className="font-bold">Total</h1>
                <h1 className="font-bold float-end">{data.total}</h1>
              </div>
            )}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="w-full flex flex-col ">
      <div className="w-full items-center py-0 px-2 flex justify-between border-b-2 bg-[#ECEBFF]">
        <div className="w-full items-center py-0 px-2 flex justify-between border-b-2 bg-[#ECEBFF]">
          <h1 className="font-normal text-violet-900 py-1  text-[17px]">
            {title}
          </h1>
          <h1 className="font-normal text-violet-900  text-[17px]">Total</h1>
        </div>
      </div>
      <div className=" pr-4 pl-2">{renderAllRows(data, 2)}</div>
    </div>
  );
}

export default TableToDisplayBackendData;
