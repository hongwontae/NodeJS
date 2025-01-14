import { useRef } from "react";
import { post } from "../http/post-http";

function Post(){

    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const imageUrlRef = useRef(null);

    async function postHandler(){
        const data = await post(titleRef.current.value, contentRef.current.value, imageUrlRef.current.value);
        console.log(data);
    }

    return(
        <>
            <h1>Post</h1>
            <input type="text" ref={titleRef}></input>
            <input type="text" ref={contentRef}></input>
            <input type="text" ref={imageUrlRef}></input>

            <button onClick={postHandler}>Post</button>
        </>
    )
}

export default Post;