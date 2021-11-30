const mongoose = require('mongoose');
require('dotenv').config();

const mongoClient = process.env.DB_CONNECTION;

module.exports = mongoose.connect(mongoClient);
