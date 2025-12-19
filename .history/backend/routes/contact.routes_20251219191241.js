const express = require("express");
const { submitContact,get } = require("../controllers/contact.controller");

const router = express.Router();

router.post("/", submitContact);

module.exports = router;
