const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./models/user.model");
const userRoutes = require("./routes/users.route");

app.use(express.json());

//Using user routes using middleware
app.use("/users", userRoutes);

//Get homepage
app.get("/", (req, res) => {
  res.send("Welcome to my Homepage");
});



mongoose.connect("mongodb+srv://kashyapb:FlU54sl5l3khSmIS@userdb.huvkc.mongodb.net/?retryWrites=true&w=majority&appName=UserDB")
  .then(() => {
    console.log("Connected!");
    
    //Port Listener
    app.listen(3000, () => {
      try {
            console.log("The server is running on port 3000");
      } 
      catch (err) {
            console.error("The error message is: ", err);
      }
    });
  })
  .catch(err => console.error(err.message));
