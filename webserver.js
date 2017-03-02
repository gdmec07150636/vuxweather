const express = require('express');
const app = express();
app.use(express.static('dist'));
const server = app.listen(8080,function () {
    console.log("Web Server is now running,port is 8080")
})