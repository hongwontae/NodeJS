export async function showDataHttp(){
    const response = await fetch('http://localhost:3000/show/all');

    if(!response.ok){
        throw new Error('Error Message');
    }

    const data = await response.json();
    return data;
}


export async function updateHttp(id){
    const response = await fetch('http://localhost:3000/service/update',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({id})
    })
    const resData = await response.json();
    return resData
}

export async function deleteHttp(id){
    const url = `http://localhost:3000/service/delete?dele=${id}`
    const response = await fetch(url, {
        method : 'DELETE'
    })
    const resData = await response.json();
    console.log(resData)
}