// Node.js basics
// Introduction to node.js
// Installing Node.js and npm 
// working with modules

// file system operation 
// understanding HTTP module



const fs = require('fs');

fs.writeFile("hello.txt", "hey hello kaise ho", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("done");
    }
});
