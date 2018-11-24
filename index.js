const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const router = require("./router");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
router(app);

const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);
