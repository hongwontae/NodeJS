export async function post(title, content, imageUrl){
    const query = {
        query : `
            mutation login($userInput : postData!){
                createPost(userInput : $userInput){
                    _id
                    title
                    content
                    creator {
                        name
                    }
                    createdAt
                    updatedAt
                }
            }
        `,
        variables : {
            userInput : {
                title,
                content,
                imageUrl,
                creator : 'Hwt'
            }
        }
    }

    const token = localStorage.getItem('token')

    const response = await fetch('http://localhost:4000/graphql', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            Authorization : 'Bearer ' + token
        },
        body : JSON.stringify(query)
    });

    const resData = await response.json();

    return resData;

}


export async function postShow(){
    const query = {
        query : `
    {
        posts {
            posts{
                _id
                title
                content
                creator{
                    name
                }
                createdAt
                updatedAt
            }
            totalPages
        }    
    }
        `
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