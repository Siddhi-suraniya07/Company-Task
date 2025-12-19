const express = require("express");
const { subscribe, getSubscribers } = require("../controllers/subscriber.controller");

const router = express.Router();

router.post("/", subscribe);
router.get("/", getSubscribers);

module.exports = router;
