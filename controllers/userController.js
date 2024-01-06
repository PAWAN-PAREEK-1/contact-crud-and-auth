const asyncHandler = require("express-async-handler");
// @desc Register a User
//@route GET /api/user/register
//@access  public

const registerUser = asyncHandler(async (req,res)=>{
    res.json({message:"Register user"});
});


// @desc Login a User
//@route GET /api/user/login
//@access  public

const loginUser = asyncHandler(async (req,res)=>{
    res.json({message:"login user"});
});



// @desc current User
//@route GET /api/user/current=
//@access  private

const currentUser = asyncHandler(async (req,res)=>{
    res.status(200).json({message:"current user information"});
});








module.exports = {registerUser,loginUser,currentUser};
