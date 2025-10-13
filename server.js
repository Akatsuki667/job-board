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

// Plug middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontEnd','html')));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, secure: false, maxAge: 24 * 60 * 60 * 1000 }
  // 24 = h; 60 = min; 60 = sec; 1000 = msec
}));

// Plug route to api
const authRoute = require('./backEnd/routes/authRoute');
app.use('/api/auth', authRoute);
const applicantRoute = require('./backEnd/routes/applicantRoute');
app.use('/api/applicant', applicantRoute);
const companyRoute = require('./backEnd/routes/companyRoute');
app.use('/api/company', companyRoute);

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontEnd', 'html', 'register.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontEnd', 'html', 'login.html'));
})

app.get('/candidate', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontEnd', 'html', 'candidate.html'));
});

app.get('/company', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontEnd', 'html', 'company.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});