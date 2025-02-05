const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const interviewRoutes = require("./routes/interview");
const authRoutes = require("./routes/auth");

// Use routes
app.use("/api", interviewRoutes);
app.use("/api/auth", authRoutes);

// Serve the main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Serve the login page
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "login.html"));
});

// Serve the dashboard page
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "dashboard.html"));
});

// Serve the profile page
app.get("/profile", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "profile.html"));
});

// Serve the settings page
app.get("/settings", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "settings.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});