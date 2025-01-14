const { buildSchema } = require("graphql");

const Schema = buildSchema(`

    type Post {
        _id : ID!
        title : String!
        content : String!
        imageUrl : String!
        creator : User!
        createdAt : String!
        updatedAt : String!
    }

    type User {
    _id : ID!
    name : String!
    email : String!
    password : String!
    status : String!
    posts : [Post!]
    }

    type Auth {
        token : String!
        userId : String!
    }

    input inputData {
        email : String!
        name : String!
        password : String!
    }

    input postData {
        title : String!
        content : String!
        imageUrl : String!
        creator : String!
    }

    type pData {
        posts : [Post!]
        totalPages : Int!
    }

    type RootMutation {
    createUser(userInput : inputData!) : User!
    createPost(userInput : postData!) : Post!
    }

    type loginQuery {
    login(email : String!, password : String!) : Auth!
    posts : pData!
}

    schema {
        query : loginQuery
        mutation : RootMutation
    }    
`);

module.exports = Schema;
