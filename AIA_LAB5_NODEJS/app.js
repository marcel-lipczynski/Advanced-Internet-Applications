//Needed modules: express, body-parser, ejs, express-session, mysql2
const bodyParser = require("body-parser");
const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();

const shopRoutes = require('./routes/shop');

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "secret key used to hash my session cookie",
    resave: false,
    saveUninitialized: false,
  })
);

// app.use("/", (req, res, next) => {
//     res.render('shop');
// });

app.use(shopRoutes);

app.listen(3001);
