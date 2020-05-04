const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const PORT = 3500;

const typeDefs = `{
    type Author{
        id: ID!
        info: Person
    }
    type Person{
        name: String!
        age:Int
        gender: String
    }
    type Query{
        getAuthors: [Author]
    }
}`;

const resolvers ={
    Query:{
        getAuthors: ()=>authors,
    }
}

const server = new ApolloServer({typeDefs,resolvers});
const app = express();

server.applyMiddleware({
    app,
    path:'/graphql'
});

/*
app.use('/',(req,res)=>{
    res.send('welcome to our page');
});

app.use('/graphql',(req,res)=>{
    res.send("welcome to our author")
});
*/

app.listen(PORT,()=>{
    console.log('server running on port ',PORT);    
});
