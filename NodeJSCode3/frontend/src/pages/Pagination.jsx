/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function Pagination({ totalPages, currentPages, setCurrentPage }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return <>
    <ul className="flex flex-row gap-4">
      {pages.map(ele => {
        return <li key={ele} >
          <button onClick={()=>setCurrentPage(ele)}>{ele}</button>
        </li>
      })}
    </ul>
  </>;
}

export default Pagination;
