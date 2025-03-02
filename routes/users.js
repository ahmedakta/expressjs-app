const express = require("express");
const router = express.Router();
// middleware in all routes
router.use(logger);

router.get("/", logger, (req, res) => {
  res.send("Users List");
});

router.post("/", (req, res) => {
  const isValid = false;
  if (isValid) {
    users.push({ firstName: req.body.firstname });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("error");
    res.render("users/new", { firstname: req.body.firstname });
  }
});

router.get("/new", (req, res) => {
  res.render("users/new");
});

router.post("/create", (req, res) => {
  res.send("Create User");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user with ID : ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`User Edit ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`User Edit ${req.params.id}`);
  });

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

//  middleware
const users = [{ name: "Ahmed" }, { name: "saly" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});
module.exports = router;
