export async function postRequestHttp(data){
    const response = await fetch('http://localhost:3000/create/items', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    })
    const resData = await response.json();
    return resData;
}

export async function clickEvent(){
    const data = await fetch('http://localhost:3000/show/items');
    const resData = await data.json();
    return resData;
  }