const path = require('path');
const express = require('express');
const jsonServer = require('json-server');

const server = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 10000;

// Serve frontend files from "public"
server.use(express.static(path.join(__dirname, 'public')));

// JSON Server API
server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`✅ App running on port ${PORT}`);
});
