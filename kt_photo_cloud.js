require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const { initializeDatabase } = require('./db/connection');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Database initialization
initializeDatabase();

// Routes
app.use('/api', require('./routes/api'));
app.use('/', require('./routes/views'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});