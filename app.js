const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, (err) => {
  if (!err) {
    console.log("App listening on port 3000");
  } else {
    console.log("Error in listening app");
  }
});
