require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/projects", require("./routes/project.routes"));
app.use("/api/clients", require("./routes/client.routes"));
app.use("/api/contact", require("./routes/contact.routes"));
app.use("/api/subscribe", require("./routes/subscriber.routes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
