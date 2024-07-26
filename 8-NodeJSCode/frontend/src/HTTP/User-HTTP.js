export async function createUser(email, password, nickname){

    const query = {
        query : `
            mutation ($data : userData!){
                createUser(data : $data){
                    email,
                    password,   
                    nickname
                }
            
        }`,
        variables : {
            data : {
                email,
                password,
                nickname
            }
        }
    }

    const response = await fetch('http://localhost:4000/graphql', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(query)
    });

    const resData = await response.json();
    
    return resData;

}


export async function loginUser(email, password){

    console.log(email, password)

    const query = {
        query : `
            mutation login($data : loginData!){
                login(data : $data){
                    email
                    password
                    nickname
                    token
                }
            }
        `,
        variables : {
            data : {
                email,
                password
            }
        }
    }

    const response = await fetch('http://localhost:4000/graphql', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body  : JSON.stringify(query)
    });

    const resData = await response.json();

    localStorage.setItem('token', resData.data.login.token)

    return resData;

}