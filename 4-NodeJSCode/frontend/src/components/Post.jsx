import { useState } from "react";
import { postRequestHttp } from "../Http/PostHTTP";

function Post() {


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('')

  async function clickEvent(e) {
    e.preventDefault();
    const data = await postRequestHttp({title, description, imageURL});
    console.log(data);
    setTitle('')
    setDescription('')
    setImageURL('')
  }

  return (
    <>
      <form className="flex flex-col justify-center items-center gap-4" onSubmit={clickEvent}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" className="text-center" value={title} onChange={(e)=>{
            return setTitle(e.target.value)
        }}></input>
        <label htmlFor="description">Description</label>
        <textarea id="description" value={description} onChange={(e)=>{
            return setDescription(e.target.value)
        }}></textarea>
        <label htmlFor="imageURL">ImageURL</label>
        <input type="text" value={imageURL} id="imageURL" onChange={(e)=>{
          return setImageURL(e.target.value)
        }}></input>
        <button type="submit" className="mt-4">Post!</button>
      </form>
    </>
  );
}

export default Post;
