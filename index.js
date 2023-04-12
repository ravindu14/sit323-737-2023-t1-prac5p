const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");

const app = express();
app.use(bodyParser());
const port = 8080;
const host = "0.0.0.0";

app.use("/", router);

app.listen(port, host, () => {
  console.log(`connected to http://${host}:${port}`);
});
