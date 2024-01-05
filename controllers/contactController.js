const asyncHandler = require("express-async-handler");
// @desc Get all contacts
//@route GET /api/contacts
//@access  public

const getContacts = asyncHandler( (req, res) => {
    res.status(200).json({ message: "get all contacts" });
});

const getContact = asyncHandler( (req, res) => {
    res.status(200).json({ message: `get contact for ${req.params.id}`});

});

const createContact = asyncHandler( (req, res) => {
    console.log(req.body)
    const {name,email,phone} = req.body;
    if (!name || !email || !phone){
        res.status(404);
        throw new Error ("All fildes are required")

    }
    res.status(200).json({ message: "create contact" });

});


const updateContact = asyncHandler( (req, res) => {
    res.status(200).json({ message: `update contact for ${req.params.id}` });

});
const deleteContact = asyncHandler(  (req, res) => {
    res.status(200).json({ message: `delete contact for ${req.params.id}` });

});



module.exports = { getContacts, getContact,updateContact,createContact,deleteContact }