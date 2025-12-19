const Subscriber = require("../models/Subscriber");

exports.subscribe = async (req, res) => {
  const { email } = req.body;
  const subscriber = await Subscriber.create({ email });
  res.status(201).json(subscriber);
};

exports.getSubscribers = async (req, res) => {
  const subscribers = await Subscriber.find().sort({ createdAt: -1 });
  res.json(subscribers);
};
