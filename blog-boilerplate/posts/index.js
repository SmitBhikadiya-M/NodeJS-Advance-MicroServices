const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();

app.use(bodyParser.json());

const posts = {};

app.get('/posts', (req, res) => {
    return res.send(posts);
})

app.post('/posts', (req, res) => {
    const { title } = req.body;
    if(!title){
        return res.status(404).send("Invalid Request");
    }
    id = randomBytes(4).toString('hex');
    posts[id] = { id, title };
    return res.status(201).send(posts[id]);
})

app.listen(4000, ()=>{
    console.log('listening on port 4000');
})