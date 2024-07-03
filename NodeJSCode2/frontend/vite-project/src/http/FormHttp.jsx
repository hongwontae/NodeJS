export async function dataHttp(data) {
  const response = await fetch("http://localhost:3000/auth/val", {
    method: "POST",
    body: data,
  });

  if (!response.ok) {
    throw new Error("Error");
  }

  const resData = await response.json();
  console.log(resData);
}
