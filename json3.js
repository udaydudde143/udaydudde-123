const fs = require("fs");

 

// STEP 1: Reading JSON file
const users = require("./users0");

 

// Defining new user
let user1 = {
    name: "Saps1",
    age: 25,
    language: ["Node", "React", "Graphql"]
};

 

// Defining a another new user
let user2 = {
    name: "Saps2",
    age: 35,
    language: ["MSA","Graphql"]
};

 

// STEP 2: Adding new data to users object
users.unshift(user1);
users.push(user2);

 

// STEP 3: Writing to a file
fs.writeFile("users0.json", JSON.stringify(users), err => {

    // Checking for errors
    if (err) throw err;

 

    console.log("Done writing"); // Success
});