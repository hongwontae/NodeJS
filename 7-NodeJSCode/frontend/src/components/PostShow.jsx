import { useEffect } from "react";
import { postShow } from "../http/post-http";

function PostShow(){

    useEffect(()=>{
        async function showData(){
            const data = await postShow();
            console.log(data);
        }

        showData();
    }, [])

    return(
        <>
            <h1>Post-Show</h1>
        </>
    )
}

export default PostShow;