const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./models/user.model");
const userRoutes = require("./routes/users.route");
const cors = require("cors"); // Import the cors module

// Use the cors middleware

// To allow only specific domains (more restrictive)
app.use(cors({
  origin: 'https://user-management-5vbzm9m0s-kashyaps-projects-dfb04cbe.vercel.app/',
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

app.use(express.urlencoded({extended:true}))

app.use(express.json());
//Using user routes using middleware
app.use("/users", userRoutes);

//Get homepage
app.get("/", (req, res) => {
  res.send("Welcome to my Homepage");
});

mongoose
  .connect(
    "mongodb+srv://kashyapb:FlU54sl5l3khSmIS@userdb.huvkc.mongodb.net/?retryWrites=true&w=majority&appName=UserDB"
  )
  .then(() => {
    console.log("Connected!");

    //Port Listener
    app.listen(8157, () => {
      try {
        console.log("The server is running on port 8157");
      } catch (err) {
        console.error("The error message is: ", err);
      }
    });
  })
  .catch((err) => console.error(err.message));
