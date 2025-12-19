const express = require("express");
const upload = require("../middlewares/upload.middleware");
const { createProject, getProjects } = require("../controllers/project.controller");

const router = express.Router();

router.post("/", upload.single("image"), createProject);
router.get("/", getProjects);

module.exports = router;
