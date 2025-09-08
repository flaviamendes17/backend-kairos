const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");

// GET dados do dashboard
router.get("/dashboard", dashboardController.getDashboard);

module.exports = router;
