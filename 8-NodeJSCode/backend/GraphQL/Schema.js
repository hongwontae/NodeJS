const {buildSchema} = require('graphql');

const Schema = buildSchema(`

    type User {
        email : String!
        password : String!
        nickname : String!
        posts : [Post!]
        token : String
    }

    type Post {
        title : String!
        description : String!
        imageURL : String!
        creator : [User!]
    }

    input userData {
        email : String!
        password : String!
        nickname : String!
    }

    input loginData {
        email : String!
        password : String!
    }
    
    type RootQuery{
        hello : User!
    }

    type RootMutation {
        createUser(data : userData!) : User!
        login(data : loginData!): User!
    }

    schema {
        query : RootQuery
        mutation : RootMutation
    }

`)

module.exports = Schema;