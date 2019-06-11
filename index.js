// Depend on express
const express = require('express');
const app = express();
// Mongoose for our MongoDB
const mongoose = require('mongoose');
// Our secret env var
require('dotenv').config()

const postsRoute = require('./routes/posts')
// Middleware:
app.use(express.json());
app.use('/posts', postsRoute)

// Main endpoint
app.get('/', (req, res) => {
    res.send("At home");
});

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log("Coneccted to MongoDB!")
);



// Run the server on the env port or else port 3000
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`));



