import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.get('/people', async (req, res) => {
  try {
    const response = await axios.get('http://flask-service:5000/people');
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Flask service:', error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Node service running on http://localhost:${port}`);
});
