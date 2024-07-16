export async function graphqlGet(){
    const response = await fetch('http://localhost:4000/graphql', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            query : `
             query{
                hello{
                id,
                name,
                password,
                email
                }
             }
            `
        })
    })

    const resData = await response.json();
    return resData;
}