var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//import method override
const methodOverride = require("method-override");
// import express session
const session = require("express-session");
// import connect flash
const flash = require("connect-flash");
//import mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://afifwijaya:mDTPxebLUiXZ42u2@cluster0-shard-00-00-ni7p1.mongodb.net:27017,cluster0-shard-00-01-ni7p1.mongodb.net:27017,cluster0-shard-00-02-ni7p1.mongodb.net:27017/db_staycation?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
///router build admin
var adminRouter = require("./routes/admin");
var apiRouter = require("./routes/api");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 60000
    },
  })
);
app.use(flash());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// static templateing sb-admin-2
app.use(
  "/sb-admin-2",
  express.static(path.join(__dirname, "node_modules/startbootstrap-sb-admin-2"))
);

app.use("/", indexRouter);
app.use("/users", usersRouter);
//router build admin
app.use("/admin", adminRouter);
app.use("/api/v1/member", apiRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;