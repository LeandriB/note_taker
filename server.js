const path = require('path');
// Require Express to run server and routes
const express = require('express');
// Designates what port the app will listen to for incoming requests
const PORT = process.env.PORT || 3001;
// Start up an instance of an app
const app = express();

// Initialize the main project folder
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
const api = require('./routes/api/index')
app.use('/api', api)

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`)
});