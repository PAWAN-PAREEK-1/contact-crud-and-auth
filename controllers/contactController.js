const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const { isValidObjectId } = require("mongoose");

// @desc Get all contacts
//@route GET /api/contacts
//@access  public

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    res.status(201).json(contacts);});

const getContact = asyncHandler(async (req, res) => {
    const id =req.params.id;
    if(!isValidObjectId(id)) {
        res.status(404);
        throw new Error("id not valid");
    }
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("contact not found");

    }
    res.status(200).json(contact);

});

const createContact = asyncHandler(async (req, res) => {
    console.log(req.body)
    const {name,email,phone} = req.body;
    if (!name || !email || !phone){
        res.status(404);
        throw new Error ("All fildes are required")

    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    })
    res.status(200).json(contact);

});


const updateContact = asyncHandler( async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("contact not found");

    }
    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updateContact);

});
const deleteContact = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    console.log(contact)
   if(!contact){
    res.status(404);
    throw new Error("contact not found");
   }
   await Contact.deleteOne(contact)
    res.status(200).json(contact);

});



module.exports = { getContacts, getContact,updateContact,createContact,deleteContact }