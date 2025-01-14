/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getItems } from "../http/http";
import Pagination from "./Pagination";

function Main() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItemsEffect() {
      const data = await getItems(currentPage);

      setCurrentPage(data.currentPage);

      setTotalPages(data.totalPages);

      setItems(data.items);
    }
    getItemsEffect();
  }, [currentPage, setCurrentPage, setTotalPages, setItems]);

  return (
    <>
      <div>
        <ul>
          {items.map((ele) => {
            return <li key={ele.id}>{ele.title}</li>;
          })}
        </ul>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Pagination>
      </div>
    </>
  );
}
export default Main;
