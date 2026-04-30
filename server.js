const express = require("express");
const path = require("path");

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// API endpoint
app.get("/api/status", (req, res) => {
  res.json({
    message: "✅ Server is running on Azure App Service!"
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});