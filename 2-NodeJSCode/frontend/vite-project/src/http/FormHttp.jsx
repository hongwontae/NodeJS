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

export async function getHttp(){
  const response = await fetch('http://localhost:3000/auth/get');
  if(!response.ok){
    throw new Error('Error')
  }
  const resData = await response.json();
  return resData;
}

export async function getgetHttp(){
  const response = await fetch('http://localhost:3000/auth/pp', {
    method : 'get'
  });
  if(!response.ok){
    throw new Error('eee')
  }

  if(response.ok){
    const blob = await response.blob();
    console.log(blob);
    const url = window.URL.createObjectURL(blob);
    console.log(url);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'LiverPool-logo.jpg'
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  
}