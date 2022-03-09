const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.json({ Message: "Hello" });
});

app.listen(port, (err) => {
  if (!err) {
    console.log("App listening on PORT : ", port);
  } else {
    console.log("Error in listening app");
  }
});
