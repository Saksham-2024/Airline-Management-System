require('dotenv').config(); // Load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes'); // Import your routes

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', routes);

// Start server
const port = process.env.PORT || 5000; // Default to 5000 if PORT is not in .env
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

