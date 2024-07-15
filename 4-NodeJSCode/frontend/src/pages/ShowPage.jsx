/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { showItemsHttp } from "../http/DataHttp";
import Pagination from "./Pagination";

function ShowPage() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function showFunction() {
      const token = localStorage.getItem("token");
      const data = await showItemsHttp(page, token);
      setItems(data.items);
      setTotal(data.totalBtn);
    }
    showFunction();
  }, [page]);

  return (
    <>
      <div className="h-screen bg-slate-600 flex flex-col">
        <ul className="flex gap-4 justify-center items-center w-full">
          {items.map((ele) => {
            return (
              <Link key={ele.id} className="border-[1px] p-2">
                <div>{ele.title}</div>
                <div>{ele.author}</div>
                <div>{ele.description}</div>
              </Link>
            );
          })}
        </ul>
        <Pagination
          curPage={page}
          onChnagePage={setPage}
          totalBtn={total}
        ></Pagination>
      </div>
    </>
  );
}

export default ShowPage;
