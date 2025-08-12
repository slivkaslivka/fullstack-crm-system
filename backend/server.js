const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'API is working' });
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});