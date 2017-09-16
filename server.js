require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";
const app = express();
const pg = require('pg');
const knexConfig = require('./knexfile');
const db = require('./db');
const ejs = require('ejs');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const sass = require('node-sass-middleware');

db.init(app, knexConfig[ENV]);
const knex = db.handle();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(cookieSession({
  keys: ['hello', 'world']
}));

app.use((req, res, next) => {
  res.locals.userId = req.session.userId;
});

