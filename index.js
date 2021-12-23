const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("port", process.env.PORT || 5050);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
const loginRoutes = require("./src/routes/login");
app.use("/login", loginRoutes);


app.listen(app.get("port"), () => {
    console.log("Server running");
  });
