const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const cors = require('cors')
const sequelize = require('./util/DB');
const User = require('./models/User')


const app = express();

app.use(cors());

app.use('/graphql', createHandler({
  schema: schema,
  rootValue: resolvers,
}));

const PORT = 4000;
app.listen(PORT, () => {
    sequelize.sync().then(()=>{
        console.log('Success DB')
    })
});