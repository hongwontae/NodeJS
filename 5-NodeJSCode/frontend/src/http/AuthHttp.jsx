export async function signupHTTP(data){
    const response = await fetch('http://localhost:4000/auth/signup', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    })

    if(!response.ok){
        throw new Error('signup-HTTP Error')
    }

    const resData = await response.json();
    return resData;
}


export async function loginHTTP(data){
    const response = await fetch('http://localhost:4000/auth/login', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    })

    if(!response.ok){
        throw new Error('login HTTP Error');
    }

    const resData = await response.json();
    return resData;
}

