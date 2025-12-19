const Client = require("../models/Client");
const cloudinary = require("../config/cloudinary");
const sharp = require("sharp");

exports.createClient = async (req, res) => {
  try {
    const { name, description, designation } = req.body;

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

    const client = await Client.create({
      name,
      description,
      designation,
      image: uploadResult.secure_url,
    });

    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: "Client creation failed" });
  }
};

exports.getClients = async (req, res) => {
  const clients = await Client.find().sort({ createdAt: -1 });
  res.json(clients);
};
