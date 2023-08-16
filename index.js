const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files (including CSS)
app.use(express.static("public"));

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html"); // Path to your HTML file
  res.sendFile(filePath);
});

app.post("/signup", (req, res) => {
  // Add logic to decode body
  // Body should have email and password
  // store email and password (as it is for now) in the USERS array (only if the user with the given email doesn't exist)
  // return back 200 code to the client
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  // Add logic to decode body
  // Body should have email and password

  // Check if the user with given email exists in the USERS array
  // Also ensure that the password is the same

  // If the password is the same, return back 200 status code to the client
  // Also send back token (any random string will do for now)
  // If the password is not the sam, return back 401 status to the cliend
  res.send("Hello World from route 1");
});

app.get("/questions", (req, res) => {
  // Return the user all the questions in the QUESTIONS array
  res.json({
    name: "john",
    age: 30,
  });
});

app.get("/submissions", (req, res) => {
  // Return the users submissions for this problems
  res.send("Hello World from route 1");
});

app.post("/submissions", (req, res) => {
  // lets the user submit a problem, randomly accept or reject the solution
  // Store the submission in the SUBMISSIONS array
  res.send("Hello World from route 1");
});

// Hard ToDos:
// 1. Create a route that lets an admin add a new problem, ensure only admins can do that
//

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
