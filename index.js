const port = process.env.PORT || 3000;
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Docker Test Deploy");
});

app.listen(port, function () {
  console.log(`Listening on port ${port}!`);
});
