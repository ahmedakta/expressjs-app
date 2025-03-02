// create express server
const express = require("express");
// setup actual server
const app = express();

// render static files renderer middleware
app.use(express.static("public"));
// tu access body of requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // for json request

app.set("view engine", "ejs");

const userRoutes = require("./routes/users");
const postRouter = require("./routes/posts");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/users", userRoutes);
app.use("/posts", postRouter);
app.listen(3000);
