const express = require("express");
const router = express.Router();
const {
  getContact,
  createContact,
  getContactforid,
  updateContactforid,
  deletecontactforid,
} = require("../controllers/contactController");

router.route("/").get(getContact);

router.route("/").post(createContact);

router.route("/:id").get(getContactforid);

router.route("/:id").put(updateContactforid);

router.route("/:id").delete(deletecontactforid);
module.exports = router;
