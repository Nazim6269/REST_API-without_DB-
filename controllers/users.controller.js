const users = require('../models/users.models');
let { v4: uuidv4 } = require('uuid');

//get users
const getAllUsers = (req, res) => {
    res.status(200).json({users})
}


//create users
const createUsers = (req, res) => {
    const newUsers = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email
    }
    users.push(newUsers);
    
    res.status(200).json(users)
}


//update users
const updateUsers = (req, res) => {
    const id = req.params.id;
    const { username, email } = req.body;
    users.filter((user) => user.id == id)
        .map((selecteduser) => {
            selecteduser.username = username;
            selecteduser.email = email;
        });
    res.status(201).json(users)
}


//delete users
const deleteUsers = (req, res) => {
    const id = req.params.id;
    users = users.filter((user) => user.id != id);
    res.status(201).json(users);
}

module.exports = {getAllUsers, createUsers,updateUsers,deleteUsers}