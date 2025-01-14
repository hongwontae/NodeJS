import { useState } from "react";
import { productRegister } from "../http/product-http";

function ProductRegister() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
  });

  function titleHandler(e) {
    setProduct((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  }

  function priceHandler(e) {
    setProduct((prev) => {
      return {
        ...prev,
        price: e.target.value,
      };
    });
  }

  function descriptionHandler(e) {
    setProduct((prev) => {
      return {
        ...prev,
        description: e.target.value,
      };
    });
  }

  async function prod() {
    const productData = await productRegister(product);
    console.log(productData);
  }

  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <h1 className="mt-10 text-3xl mb-6">Product Register</h1>
        <form className="flex gap-4">
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              className="text-center"
              type="text"
              onChange={titleHandler}
            ></input>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              id="price"
              className="text-center"
              type="number"
              onChange={priceHandler}
            ></input>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              id="description"
              className="text-center"
              type="text"
              onChange={descriptionHandler}
            ></input>
          </div>
        </form>
        <button className="border-[1px] rounded-md mt-4 p-1" onClick={prod}>
          Register
        </button>
      </div>
    </>
  );
}

export default ProductRegister;
