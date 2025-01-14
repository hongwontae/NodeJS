import { useRef } from "react";
import { postItemHTTP } from "../http/DataHttp";

function CreatePost() {
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const descRef = useRef(null);

  async function submitPost(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const data = await postItemHTTP(
      {
        title: titleRef.current.value,
        author: authorRef.current.value,
        description: descRef.current.value,
      },
      token
    );
    console.log(data);
  }

  return (
    <>
      <div className="h-screen bg-slate-600">
        <form
          onSubmit={submitPost}
          className="h-full flex flex-col justify-center items-center text-red-600"
        >
          <label htmlFor="title">Title</label>
          <input id="title" type="text" className="text-center" ref={titleRef}></input>

          <label htmlFor="author">Author</label>
          <input id="author" type="text" className="text-center" ref={authorRef}></input>

          <label htmlFor="description">Description</label>
          <textarea id="description" type="text" className="text-center" ref={descRef}></textarea>
          <button className="mt-4 border-[1px] p-1 bg-red-300">Post</button>
        </form>
      </div>
    </>
  );
}

export default CreatePost;
