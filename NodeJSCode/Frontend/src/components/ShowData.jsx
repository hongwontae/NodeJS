import { useEffect, useState } from "react";
import { showDataHttp } from "../http/FormHttp";

function ShowData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function httpShow() {
      const data = await showDataHttp();
      setData(data);
    }
    httpShow();
  }, []);

  return (
    <>
      {data &&
        data.map((ele) => {
          return <div key={ele.id}>{ele.descr}</div>;
        })}
    </>
  );
}

export default ShowData;
