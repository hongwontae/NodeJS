export async function productLoader({params, request}){
    console.log(params);
    console.log(request);

    const response = await fetch(`http://localhost:4000/product/showone/${params.prodId}`);
    
    const resData = await response.json();

    return resData;

}