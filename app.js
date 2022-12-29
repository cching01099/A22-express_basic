//require express
const express = require("express");
const app = express();
const port = 3000;

// require express-handlebars here
const exphbs = require("express-handlebars");

// setting template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//setting static file(css,js)
app.use(express.static("public"));

//routing setting
app.get("/", (req, res) => {
  res.render("index");
});

// setting dynamic route for showing different title
// :"title" = 各對應的title: contact,about....
app.get("/:title", (req, res) => {
  const title = req.params.title;
  res.render("show", { title: title });
});

//start & listen to the express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
