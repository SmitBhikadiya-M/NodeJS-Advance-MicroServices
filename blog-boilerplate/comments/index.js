const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const commentsByPostId = {}

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/posts/:id/comments', (req, res) => {
    return res.send(commentsByPostId[req.params?.id] ?? []);
})

app.post('/posts/:id/comments', (req, res) =>{
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;
    const comment = { id: commentId, content };
    if(commentsByPostId[req.params?.id]){
        commentsByPostId[req.params?.id] = [...commentsByPostId[req.params?.id], comment]
    }else{
        commentsByPostId[req.params?.id] = [comment]
    }
    return res.status(201).send(comment); 
});

app.listen(4001, () => {
    console.log('listening on port 4001');
})