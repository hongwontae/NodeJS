export async function showDataHttp(){
    const response = await fetch('http://localhost:3000/show/all', {
        credentials : 'include'
    });

    if(!response.ok){
        throw new Error('Error Message');
    }

    const data = await response.json();
    return data;
}

export async function postDataHttp(data){
    const response = await fetch('http://localhost:3000/service/register', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data),
        credentials : 'include'
    }); 

    if(!response.ok){
        throw new Error('Error Message')
    }
    console.log(await response.json());
}

export async function getCookie(){
    const response = await fetch('http://localhost:3000/show/coo', {
        credentials : 'include'
    });
    const cookieData = await response.json();
    console.log(cookieData);
}

