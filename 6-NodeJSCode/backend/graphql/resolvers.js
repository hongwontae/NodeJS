const resolvers = {
    hello(){
        return {
            id : 1,
            name : 'HWT',
            email : 'dnjsxoghd@naver.com',
            password : 'ksdnxicnwjkxon@dmxwmk'
        }
    },
    updateText({newText}){
        console.log(newText)
        return {
            name : newText.name,
            email : newText.email,
            passowrd : newText.password
        }
    }

  };
  
  module.exports = resolvers;