export async function getItems(currentPage){
    const response = await fetch(`http://localhost:3000/show/items?page=${currentPage}`);

    if(!response.ok){
        throw new Error('Error!')
    }

    const resData = await response.json();
    return resData;
}