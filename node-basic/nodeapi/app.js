const express = require("express");
const app = express();
const path = require("path");

// bring in routes
const { getPosts } = require('./routes/post');


app.get("/", getPosts);


const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});