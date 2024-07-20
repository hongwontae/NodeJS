import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { productAllShow } from "../http/product-http";

function Products() {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    async function getAll() {
      const productAllData = await productAllShow();
      setProd(productAllData);
    }

    getAll();
  }, []);

  console.log(prod)

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mt-10 mb-4">Products Page</h1>
        <ul className="flex flex-col text-center gap-2">
          {prod.map(ele => {
            return <li key={ele._id}>
              <Link to={`/prod/${ele._id}`}>{ele.title}</Link>
            </li>
          })}
        </ul>
      </div>
    </>
  );
}

export default Products;
