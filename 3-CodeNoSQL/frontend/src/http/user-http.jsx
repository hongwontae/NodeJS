export async function postuser(data){
    const response = await fetch('http://localhost:4000/auth/signup', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
}

