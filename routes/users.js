const express = require("express");
const router = express.Router();

// router
// routes
router.get("/", (req, res) => {
  res.send("Users List");
});
router.get("/new", (req, res) => {
  res.send("User Form");
});

module.exports = router;
