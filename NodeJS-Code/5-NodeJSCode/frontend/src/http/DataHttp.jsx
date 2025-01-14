export async function showItemsHttp(params, token) {
  const response = await fetch(
    `http://localhost:4000/show/items?page=${params}`,{
        method : 'GET',
        headers : {
            'Authorization' : "Bearer " + token
        }
    }
  );

  if (!response.ok) {
    throw new Error("전송 중 에러");
  }

  const resData = await response.json();
  console.log(resData)
  return resData;
}

export async function postItemHTTP(data, token) {
  const response = await fetch("http://localhost:4000/create/item", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Post Item Http Error");
  }

  const resData = await response.json();
  return resData;
}
