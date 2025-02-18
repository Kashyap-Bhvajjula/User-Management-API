const express = require('express');
const User = require('../models/user.model');
const router = express.Router(); // Helps us in managing the routes of the API
const{ deleteByID, updateById, getById, getAll, createUser } = require('../controllers/user.controller');


  //Creating a user
  router.post('/', createUser); 

  //get all users
  router.get("/", getAll)
  
  
  //get users based on ID
  router.get("/:id", getById)

  
  //update user based on ID
  router.put("/:id", updateById)

  
  //delete user based on ID 
  router.delete("/:id", deleteByID)

  module.exports = router;

  