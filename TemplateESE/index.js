import express from 'express';

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Route
app.get('/', (req, res) => {
    res.render('home', {
        name: 'Ravikant',
        ytChannel: 'Radiant-neuron', // match case exactly
        age: 23
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
