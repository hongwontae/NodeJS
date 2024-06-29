/* eslint-disable react/prop-types */
import { useRef } from "react";
import { postDataHttp } from "../http/FormHttp";

function PostData({ setRe }) {

    const titleRef = useRef(null);


  async function postData(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formDataObj = {
      title: formData.get("title"),
      price: formData.get("price"),
      description: formData.get("description"),
    };
    await postDataHttp({formDataObj});

    titleRef.current.value = ''

    setRe((prev)=>{
        return !prev
    });
  }

  return (
    <>
      <form onSubmit={postData} className="flex justify-center items-center gap-4">
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" ref={titleRef}></input>

        <label htmlFor="price">Price</label>
        <input id="price" type="number" name="price"></input>

        <label htmlFor="description">Desc</label>
        <textarea id="description" type="text" name="description"></textarea>
        <button>Post Data!</button>
      </form>
    </>
  );
}

export default PostData;
