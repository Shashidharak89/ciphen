const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const teamRoutes = require("./routes/teamRoutes");
const eventRoutes=require("./routes/eventRoutes");
const eventRoutesNoPhoto=require("./routes/eventRoutesNoPhoto");
const teamNoPhotoRoutes=require("./routes/teamNoPhotoRoutes");
const contactUs=require("./routes/contactRoutes");
const bca2025Routes=require("./routes/bca2025Routes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.use("/api/team", teamRoutes);
app.use("/api/contact", contactUs);
app.use("/api/teamlatest", teamNoPhotoRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/eventlatest", eventRoutesNoPhoto);
app.use("/api/bca2025", bca2025Routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
