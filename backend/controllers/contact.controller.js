const Contact = require("../models/Contact"); // ✅ REQUIRED

exports.submitContact = async (req, res) => {
    try {
        const { fullName, email, mobile, city } = req.body;

        if (!fullName || !email || !mobile || !city) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const contact = await Contact.create({ fullName, email, mobile, city });

        res.status(201).json({ message: "Contact submitted successfully", data: contact });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Contact submission failed", error: error.message });
    }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch contacts" });
  }
};

