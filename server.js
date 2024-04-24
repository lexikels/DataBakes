// server.js
const express = require("express");
const dbConnection = require("./db"); // Import database connection module
const websiteRoutes = require("./routes/websites");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api", websiteRoutes);

// Start the server after database connection is established
dbConnection.once("open", () => {
  console.log("Connected to MongoDB Atlas cluster");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// Handle MongoDB connection errors
dbConnection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
