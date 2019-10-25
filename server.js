const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/getStock', (req, res) => {
    var list = ["stock1", "stock2", "stock3"];
    res.json(list);
    console.log('Sent list of stock');
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('Server listening on port ' + port);