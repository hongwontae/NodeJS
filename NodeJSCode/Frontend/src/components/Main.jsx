/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { showDataHttp } from "../http/FormHttp";

function Main({ re }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await showDataHttp();
      setData(data);
    }
    getData();
  }, [re]);


  return (
    <>
      <main className="text-center">
        <div>This Page GOOD</div>
        <ul className="flex justify-center gap-4">
          {data &&
            data.map((ele) => {
              return (
                <React.Fragment key={ele.id}>
                  <li>{ele.title}</li>
                </React.Fragment>
              );
            })}
        </ul>
      </main>
    </>
  );
}

export default Main;
