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

export async function prodOneShow(param){
    const response = await fetch(`http://localhost:4000/product/showone/${param}`);

    const resData = await response.json();

    return resData;
}