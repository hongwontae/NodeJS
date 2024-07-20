import { Link, useLoaderData } from "react-router-dom";

function Product() {
  const productOneData = useLoaderData();

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="mt-10 text-3xl mb-2">Product</h1>
        <div className="border-[1px] p-1 rounded-lg flex flex-col items-center">
          <div>Title - {productOneData.title}</div>
          <div>Price - {productOneData.price}</div>
          <p>Description - {productOneData.description}</p>
          <div className="mb-2 mt-4 flex gap-4 justify-center items-center">
            <Link to={'/prod/edit'} state={productOneData} className="border-[1px] p-1  rounded-lg ">Edit</Link>
            <Link className="border-[1px] p-1  rounded-lg ">Delete</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
