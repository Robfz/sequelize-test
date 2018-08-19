const express = require('express');

const PORT = process.env.PORT || 8000;

const api = express();

api.get('/', (req, res) => {
  res.json({ success: true });
});

api.listen(PORT, () => {
  console.log(`API listening on port ${PORT}...`);
});
