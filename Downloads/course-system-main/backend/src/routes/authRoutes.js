const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');  // Importing controller

// Define the POST route for login
router.post('/login', authController.login);  // Use .post instead of .use

module.exports = router;


