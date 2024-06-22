function PostData(){

    function submitFunction(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const postData = {
            title : formData.get('title'),
            price : formData.get('price'),
            description : formData.get('description')
        }
        
    }

    return(
        <>
            <form onSubmit={submitFunction}>

            </form>
        </>
    )
}

export default PostData;