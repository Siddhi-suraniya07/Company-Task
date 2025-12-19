const Project = require("../models/Project");
const cloudinary = require("../config/cloudinary");
const sharp = require("sharp");

exports.createProject = async (req, res) => {
  try {
    const { name, description } = req.body;

    const buffer = await sharp(req.file.buffer)
      .resize(450, 350)
      .toBuffer();

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ resource_type: "image" }, (err, result) => {
          if (err) reject(err);
          resolve(result);
        })
        .end(buffer);
    });

    const project = await Project.create({
      name,
      description,
      image: uploadResult.secure_url,
    });

    res.status(201).json(project);
  } 
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
};
