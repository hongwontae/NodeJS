export async function fetchFormPost(data){
    const postForm = await fetch('http://localhost:3000/service/register', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    })

    if(!postForm.ok){
        throw new Error('Error 발생!')
    }
}

export async function sendPostHttp(data){

    const postForm = await fetch('http://localhost:3000/service/query?edit=true&delete=false', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify([data])
    })

    if(!postForm.ok){
        throw new Error('Error 발생!')
    }
}

export async function showDataHttp(){
    const response = await fetch('http://localhost:3000/show/all');

    if(!response.ok){
        throw new Error('Error Message');
    }

    const data = await response.json();
    console.log(data)
    return data;
}

export async function showDataOne(num){
    const url = `http://localhost:3000/show/findOne?data=${num}`
    const response = await fetch(url)

    if(!response.ok){
        throw new Error('Error Occurred!');
    }

    const data = await response.json();
    console.log(data)
    return data;
}