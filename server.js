const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection.js");
const exphbs = require("express-handlebars");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Create a session
const sess = {
  secret: "super super secret",
  cookie: { maxAge: 360000 },
  resave: false,
  saveUnitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
