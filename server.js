const express = require("express");
var app = express();
var router1 = require("./apiRouter.js");

var checkAdmin = (req, res, next) => {
  req.user.role;
  next();
};

var checkDangNhap = (req, res, next) => {
  if (dangnhap) {
    req.user = user;
    next();
  } else {
    res.json("ban chua dang nhap");
  }
};
app.get("/", checkDangNhap, (req, res, next) => {
  res.json("du lieu");
});

app.use("/admin/api1/v1", checkDangNhap, checkAdmin, router1);

app.listen(3000, () => {
  console.log(`Server is running on port`);
});
