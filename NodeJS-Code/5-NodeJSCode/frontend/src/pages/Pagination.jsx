/* eslint-disable react/prop-types */

import { useMemo } from "react";

/* eslint-disable no-unused-vars */
function Pagination({ onChnagePage, curPage, totalBtn }) {
  const totalBtnCal = useMemo(() => {
    let arr = Array.from({ length: +totalBtn }, (_, index) => index + 1);
    return arr;
  }, [totalBtn]);

  const btn = totalBtnCal;

  return (
    <>
      <div className="flex justify-center gap-4">
        {btn.map((ele) => {
          return <button onClick={()=>onChnagePage(ele)} className="border-[1px] p-1" key={ele}>{ele}</button>;
        })}
      </div>
    </>
  );
}

export default Pagination;
