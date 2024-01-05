// @desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
    res.status(200).json({ message: "get all contacts" });
};

const getContact = (req, res) => {
    res.status(200).json({ message: `get contact for ${req.params.id}`});

};

const createContact = (req, res) => {
    res.status(200).json({ message: "create contact" });

};


const updateContact = (req, res) => {
    res.status(200).json({ message: `update contact for ${req.params.id}` });

};
const deleteContact = (req, res) => {
    res.status(200).json({ message: `delete contact for ${req.params.id}` });

};



module.exports = { getContacts, getContact,updateContact,createContact,deleteContact }