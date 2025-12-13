// Express.js Framework:

// Introduction to Express.js 
// Express js ek npm package hai 
//framework
// manage ecveryting from receiving the request and givving the response


// Setting up a basic Expresss application 
// Routing 
// Middleware 
//Request and Response handling
// Error handlingnpm i expres







const express = require('express');
const app = express();

// Middleware
app.use(function (req, res, next) {
    console.log("middleware");
    next(); // request ko aage jane deta hai
});

// Home Route
app.get("/", function (req, res) {
    res.send("first request chal gaya");
});

// Profile Route
app.get("/profile", function (req, res) {
    res.send("second request chal gaya");
});

// Server start
app.listen(3000, function () {
    console.log("Server running on port 3000");
});
