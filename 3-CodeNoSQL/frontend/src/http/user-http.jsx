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

export async function loginUser(data){
    console.log(data)
    const response = await fetch('http://localhost:4000/auth/login', {
        method : 'POST',
        headers : {
            'Content-Type' : 'applcation/json'
        },
        body : JSON.stringify(data)
    });

    const resData = await response.json();

    return resData;
}
