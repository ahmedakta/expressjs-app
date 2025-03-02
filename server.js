// create express server
const express = require("express");
// setup actual server
const app = express();
app.set("view engine", "ejs");

const userRoutes = require("./routes/users");
const postRouter = require("./routes/posts");

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/users", userRoutes);
app.use("/posts", userRoutes);
app.listen(3000);
