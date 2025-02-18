const User = require('../models/user.model'); // Ensure this path is correct relative to your file

const { v4: uuidv4 } = require('uuid');

const createUser = async (req, res) => {
  try {
    const { username, name, email, age, roles } = req.body;
    const user = new User({ 
      userId: uuidv4(), 
      username, 
      name, 
      email, 
      age, 
      roles 
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




const getAll = async (req,res) => {
    try{
        const user = await User.find({});
        res.status(200).json(user); 
    }
    catch(err){
      res.status(500).json({message: err.message});
    }
  }

const getById = async(req,res) => {
    try{
      const id = req.params.id;
      const user = await User.findById(id);
      res.status(200).json(user);
    }
    catch(err){
      res.status(500).json({message: err.message});
    }
  }

const updateById = async(req,res) => {
    try{
      const id = req.params.id;
      const user = await User.findByIdAndUpdate(id, req.body);
      
      if(!user){
        res.status(404).json({message: "User not found"});
      }
  
      const updatedUser = await User.findById(id);
      res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
  }

  const deleteByID = async(req,res) => {
    try{
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        if(!user){
          res.status(404).json({message: "User not found"});
        }
        res.status(200).json({message: "User deleted successfully"});
    }
    catch(err){
      res.status(500).json({message: err.message});
    }
  }

 

  module.exports = {
    getAll,
    getById,
    updateById,
    deleteByID,
    createUser
};