const express = require("express");
const router = express.Router();

// router
// routes
router.get("/", (req, res) => {
  res.send("Posts List");
});
router.get("/new", (req, res) => {
  res.send("Post Form");
});

module.exports = router;
