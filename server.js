// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files link index, about, and 404 pages.
app.use(express.static(path.join(__dirname, 'public')));

// Route to the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to the about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// 404 route for all other paths
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});