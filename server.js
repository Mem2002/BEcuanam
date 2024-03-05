const express = require("express");
var app = express();
var router1 = require("./apiRouter.js");

var checkAdmin = (req, res, next) => {
  if (dangnhap) {
    user.role = "admin";
    next();
  } else {
    res.json("ban chưa đăng nhập");
  }
};

var checkDangNhap = (req, res, next) => {};
;

app.get("/", checkDangNhap, (req, res, next) => {
  res.json("du lieu");
});

app.use("/admin/api1/v1", checkAdmin, router1);

app.listen(3000, () => {
  console.log(`Server is running on port`);
});
