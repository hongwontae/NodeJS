export async function signUpHttp(data){
    const response = await fetch('http://localhost:3000/auth/signup', {
        method : 'POST',
        headers : {
            'ContenT-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    });

    if(!response.ok){
        throw new Error('Error가 발생했습니다.')
    }

    const resData = await response.json();

    return resData;
}

export async function loginHttp(data){
    const response = await fetch('http://localhost:3000/auth/login', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data),
        credentials : 'include'
    })

    const resData = await response.json();
    return resData;
}

export async function logoutHttp(){
    const response = await fetch('http://localhost:3000/auth/logout',{
        method : 'POST',
        credentials : 'include'
    })

    if(!response.ok){
        throw new Error('logout Error')
    }

    const resData = await response.json();
    return resData;
}

export async function resetHttp(data){
    const response = await fetch('http://localhost:3000/auth/reset', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    })

    const resData = await response.json();
    return resData;
}