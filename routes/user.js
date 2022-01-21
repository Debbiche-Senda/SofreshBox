const express = require("express");
// const {models} = require('mongoose');
const { userRegister, userLogin, getUsers, getUserById, editUser } = require("../controllers/user.controller");
const isAuth = require("../middlewares/passport-setup");
// const googleAuth = require("../middlewares/passport.google")
const {registerRules, validator} = require("../middlewares/validator")
const Router = express.Router();

Router.post('/register', registerRules(), validator, userRegister);
Router.post('/login', userLogin);  
Router.get('/getUser', getUsers );
Router.get('/getUserById/:_id',isAuth(), getUserById);
Router.get('/current-user', isAuth(), (req, res)=>{
    res.json(req.user);
});
Router.put('/editUser/:_id', isAuth(), editUser)

module.exports = Router;