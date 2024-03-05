const express = require("express");
var router = express.Router(); //viết hoa là 1 class

router.get("/", (req, res) => {
  res.json("router 1 user");
});

router.get("/product", (req, res) => {
  res.json("product 1 user");
});

router.get("/cart", (req, res) => {
  res.json("cart 1 user");
});

router.get("/:id", (req, res) => {
  // để id phía sau thì sẽ truy suất vào link đầu tiên
  res.json("router 1 user" + req.params.id);
});

module.exports = router;
