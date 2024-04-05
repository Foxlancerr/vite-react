import { useEffect, useState } from "react";
import TableToDisplayBackendData from "./TableToDisplayBackendData";
import { useFetch } from "../hooks";

function RenderData() {
  const [database, setDatabase] = useState();
  const { getDataFromBackend } = useFetch();

  useEffect(() => {
    getDataFromBackend("users").then((data) => {
      if (data) {
        setDatabase(data);
      } else {
        setDatabase(null);
      }
    });
  },[]);

  if (database == null) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <h1 className="text-3xl font-semibold">Loading ...</h1>
      </div>
    );
  } else {
    return <>{TableToDisplayBackendData(database, "Categries")}</>;
  }
}

export default RenderData;
