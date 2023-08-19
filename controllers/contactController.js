const getContact = (req, res) => {
  res.status(200).json("get all constacts");
};

const createContact = (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatorty");
  }
  res.status(201).json("create contact");
};

const getContactforid = (req, res) => {
  res.status(200).json(`get contact for ${req.params.id}`);
};

const updateContactforid = (req, res) => {
  res.status(200).json(`update contact for ${req.params.id}`);
};

const deletecontactforid = (req, res) => {
  res.status(200).json(`delete contact for ${req.params.id}`);
};

module.exports = {
  getContact,
  createContact,
  getContactforid,
  updateContactforid,
  deletecontactforid,
};
