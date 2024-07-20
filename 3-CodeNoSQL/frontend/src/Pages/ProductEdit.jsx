import { useRef } from "react";
import { useLocation } from "react-router-dom";

function ProductEdit(){

    const titleRef = useRef(null);
    useRef(null);
    useRef(null);

    const location = useLocation();
    const titleData = location.state.title;
    const priceData = location.state.price;
    const descriptionData = location.state.description;
    console.log(location.state)

    return(
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl mt-8 mb-4">Product Edit</h1>
                <form className="flex flex-col items-center">

                    <label htmlFor="title">Title</label>
                    <input id="title" defaultValue={titleData}></input>

                    <label htmlFor="price">Prcie</label>
                    <input id="price" type="number" defaultValue={priceData}></input>

                    <label htmlFor="description" >Description</label>
                    <textarea id="description" defaultValue={descriptionData}></textarea>
                </form>
                <div className="flex gap-2 mt-4">
                    <button className="border-[1px] rounded-md p-1">Reset</button>
                    <button className="border-[1px] rounded-md p-1">Update</button>
                </div>
            </div>
        </>
    )
}

export default ProductEdit;