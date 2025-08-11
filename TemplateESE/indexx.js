import express from 'express';
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// GET route for form
app.get('/add-user', (req, res) => {
    res.render('addUser'); // Make sure addUser.ejs exists in views/
});

// POST route for submission
app.post('/submit-user', (req, res) => {
    const { name, age, email } = req.body;
    res.render('userDetail', { name, age, email }); // Pass data to the EJS template
});

// Start server
app.listen(3200, () => {
    console.log('Server running at http://localhost:3200');
});
