import { useRef, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Modal from "../components/Modal";

function Product() {
  const modalRef = useRef(null);
  const [modal, setModal] = useState(false);

  const productOneData = useLoaderData();
  return (
    <>
      {modal ? (
        <Modal
          ref={modalRef}
          setModal={setModal}
          _id={productOneData._id}
        ></Modal>
      ) : null}
      <div className="flex flex-col items-center">
        <h1 className="mt-10 text-3xl mb-2">Product</h1>
        <div className="border-[1px] p-1 rounded-lg flex flex-col items-center">
          <div>Title - {productOneData.title}</div>
          <div>Price - {productOneData.price}</div>
          <p>Description - {productOneData.description}</p>
          <div className="mb-2 mt-4 flex gap-4 justify-center items-center">
            <Link
              to={"/prod/edit"}
              state={productOneData}
              className="border-[1px] p-1  rounded-lg "
            >
              Edit
            </Link>
            <button
              className="border-[1px] p-1  rounded-lg"
              onClick={() => setModal(true)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
