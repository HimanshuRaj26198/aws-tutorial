const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.use("/", (req, res) => {
  res.send("Hello World !");
});

app.listen(port, (err) => {
  if (!err) {
    console.log("App listening on PORT : ", port);
  } else {
    console.log("Error in listening app");
  }
});
