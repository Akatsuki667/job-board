// Import framework Express
const express = require('express');
const cors = require('cors');
// Import of path module
const path = require('path');
const session = require('express-session');
// Import dotenv module to load environnement variable
require('dotenv').config();

// Create instance of Express app
const app = express();
// Define PORT
const PORT = process.env.PORT;

app.use(cors());

// Plug middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontEnd')));
app.use(session({
  secret: process.env.SESSION_SECRET || 'mon_super_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, secure: false, maxAge: 24 * 60 * 60 * 1000 }
}));

// Plug route to api
const authRoute = require('./backEnd/routes/authRoute');
app.use('/api/auth', authRoute);
const applicantRoute = require('./backEnd/routes/applicantRoute');

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontEnd', 'html', 'register.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontEnd', 'html', 'login.html'));
})

app.get('/candidate', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontEnd', 'html', 'candidate.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});