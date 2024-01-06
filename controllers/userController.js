const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel")
// @desc Register a User
//@route GET /api/user/register
//@access  public

const registerUser = asyncHandler(async (req,res)=>{
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("all fields are required");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("email is not available");
    }

    //Hashed password

    const hashedPassword = await bcrypt.hash(password,10);

const user = await User.create({
    username,
    email,
    password:hashedPassword,
});
    if(user){
        res.status(200).json({_id: user.id,email:user.email});
    }
    else{
        res.status(401)
        throw new Error("user data is not valid ")
    }



});


// @desc Login a User
//@route GET /api/user/login
//@access  public

const loginUser = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(404);
        throw new Error ("please provide email and password")

    }
    const user = await User.findOne({email})
if(user && (await bcrypt.compare(password,user.password))){
    const accessToken = jwt.sign({
        user:{
            username: user.username,
            email: user.email,
            id: user.id

        }
    },process.env.ACCESS_TOKEN,
    {expiresIn:"50m"}
    )
    res.status(200).json({accessToken});
}
else{
    res.status(401)
    throw new Error("user not found")
}

    res.json({message:"login user"});
});



// @desc current User
//@route GET /api/user/current=
//@access  private

const currentUser = asyncHandler(async (req,res)=>{
    res.status(200).json({message:"current user information"});
});








module.exports = {registerUser,loginUser,currentUser};
