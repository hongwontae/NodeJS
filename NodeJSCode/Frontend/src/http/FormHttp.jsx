export async function showDataHttp() {
  const response = await fetch("http://localhost:3000/show/all", {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error Message");
  }

  const data = await response.json();
  return data;
}

export async function postDataHttp({formDataObj}) {


  const response = await fetch("http://localhost:3000/service/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDataObj),
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error Message");
  }
  console.log(await response.json());
}

export async function getCookie() {
  const response = await fetch("http://localhost:3000/show/coo", {
    credentials: "include",
  });
  const cookieData = await response.json();
  console.log(cookieData);
}

export async function signUpPostHttp(data) {


  const response = await fetch("http://localhost:3000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials : 'include',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("응답이 실패했습니다.");
  }

  const resData = await response.json();
  console.log(resData);
}

export async function loginPostHttp(data) {


  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("응답이 실패했습니다.");
  }

  const resData = await response.json();
  console.log(resData);

}

export async function resetPasswordHttp(data){
  const response = await fetch('http://localhost:3000/auth/reset', {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(data)
  })

  if(!response.ok){
    throw new Error('Reset Erro')
  }

  const resData = await response.json();
  return resData;

}