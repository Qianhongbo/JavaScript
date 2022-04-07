import express from 'express';

const app = express();
const port = 3000;

//set endpoint
app.get('/api', (req, res) => {
    res.send("Hello world!");
});

// check for port to avoid already in use error testing 
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
