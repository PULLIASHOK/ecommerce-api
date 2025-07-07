
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.routes');

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, () => console.log('MongoDB Connected'));
app.listen(3000, () => console.log('Server started on http://localhost:3000'));
