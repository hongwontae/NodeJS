export async function productRegister(data){
    const response = await fetch('http://localhost:4000/product/register', {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    }); 

    const resData = await response.json();
    return resData;

}   

export async function productAllShow(){
    const response = await fetch('http://localhost:4000/product/showall');

    const resData = await response.json();

    return resData;
}

export async function prodOneShow(params){
    const response = await fetch(`http://localhost:4000/product/showone/${params}`);

    const resData = await response.json();

    return resData;
}

export async function updateProduct(data){
    console.log(data)
    const response = await fetch('http://localhost:4000/product/update', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    })

    const resData = await response.json();

    return resData;
}

export async function deleteProduct(params){
    const response = await fetch(`http://localhost:4000/product/delete/${params}`, {
        method : 'DELETE'
    });

    const resData = await response.json();

    return resData;
}