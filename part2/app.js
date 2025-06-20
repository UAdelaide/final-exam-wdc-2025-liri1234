const express = require('express');
const session = require('express-session');//imported express session
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');

//using sessions
app.use(session({
  secret: 'dogwalker_secret',
  resave: false,
  saveUninitialized: true
}));

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);


// Export the app instead of listening here
module.exports = app;