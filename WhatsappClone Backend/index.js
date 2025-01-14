import express from 'express';
import Connection from './DataBase/db.js';
const app = express();
const PORT = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to the database
Connection();

// Define a simple route for testing
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, ()=> console.log(`server is successfully running on PORT ${PORT}`));