export async function signupPost(email, password, name) {
  const graphQlquery = {
    query: `
            mutation($userInput : inputData!){
                createUser(userInput : $userInput){
                    _id,
                    email,
                    password,
                }
            }
        `,
    variables: {
      userInput: {
        email: email,
        password: password,
        name: name,
      },
    },
  };

  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(graphQlquery),
  });

  const resData = await response.json();

  return resData;
}

export async function login(email, password){

  console.log(email, password)

  const query = {
    query : `query($email : String!, $password : String!){
      login(email : $email, password : $password){
        userId,
        token
      }
    }`,
    variables : {
      email : email,
      password : password
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
  localStorage.setItem('token', resData.data.login.token);

  return resData;

}
