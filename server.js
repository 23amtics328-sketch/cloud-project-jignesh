const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public'));

// Route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Server start
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});