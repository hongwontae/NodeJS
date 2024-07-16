const { buildSchema } = require('graphql');

const schema = buildSchema(`

    type User {
        id : ID!
        name : String!
        email : String!
        password : String!
    }
    
    type RootQuery {
        hello : User!
    }

    type muta {
        updateText(newText : String!) : User!
    }

    input update

    schema {
        query : RootQuery
        mutation : muta
    }

`);

module.exports = schema;