const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
      type: String,
      required: [true, "Please Enter your name here"], // Custom Error Message
      minLength: [3, "Name should be atleast 3 characters long"],
  },
  email: {
      type: String,
      required: [true, "Please Enter your email here"],
      validate: {
        validator: function (emaill) {
          return emaill.includes("@"); // This is a custom validator
        },
      },
      unique: [true, "Email already exists!"], // We cannot have two users with the same email
  },
  age: {
      type: Number,
      required: [true, "Don't forget to add your age"],
      min: [18, "You should be atleast 18 years old"],
  },
  roles: {
      type: [String],
      required: true,
      enum: ["admin", "user"],
  },
},
{
    timestamps: true,
});

const user = mongoose.model("User", userSchema);

module.exports = user; // We are exporting the User model so that we can use it in our index.js file