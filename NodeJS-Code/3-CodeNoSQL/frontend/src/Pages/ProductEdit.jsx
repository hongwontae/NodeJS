import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateProduct } from "../http/product-http";
import Modal from '../components/Modal';

function ProductEdit() {
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const descRef = useRef(null);

  const navigate = useNavigate();

  const location = useLocation();
  const titleData = location.state.title;
  const priceData = location.state.price;
  const descriptionData = location.state.description;

  async function updateHandler() {
    const resData = await updateProduct({
      _id: location.state._id,
      title: titleRef.current.value,
      price: priceRef.current.value,
      description: descRef.current.value,
    });
    console.log(resData);
    navigate("/showall");
  }

  function resetHandler() {
    titleRef.current.value = "";
    priceRef.current.value = "";
    descRef.current.value = "";
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl mt-8 mb-4">Product Edit</h1>
        <form className="flex flex-col items-center">
          <label htmlFor="title">Title</label>
          <input id="title" defaultValue={titleData} ref={titleRef}></input>

          <label htmlFor="price">Prcie</label>
          <input
            id="price"
            type="number"
            defaultValue={priceData}
            ref={priceRef}
          ></input>

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            defaultValue={descriptionData}
            ref={descRef}
          ></textarea>
        </form>
        <div className="flex gap-2 mt-4">
          <button
            className="border-[1px] rounded-md p-1"
            onClick={resetHandler}
          >
            Reset
          </button>
          <button
            className="border-[1px] rounded-md p-1"
            onClick={updateHandler}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductEdit;
