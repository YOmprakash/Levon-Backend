// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Import routes
const routes = require('./routes');

// Use routes
app.use('/api', routes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
}).catch(err => console.log(err));
