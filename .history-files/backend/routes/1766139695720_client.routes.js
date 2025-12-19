const express = require("express");
const upload = require("../middlewares/upload.middleware");
const { createClient, getClients } = require("../controllers/client.controller");

const router = express.Router();

router.post("/", upload.single("image"), createClient);
router.get("/", getClients);

module.exports = router;
