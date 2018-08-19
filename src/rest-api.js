const express = require('express');
const { getDatabaseConnection } = require('./database');

const PORT = process.env.PORT || 8000;

const db = getDatabaseConnection('sequelize_test', 'roberto', '');
const api = express();

api.get('/', (req, res) => {
  res.json({ success: true });
});

async function init() {
  await db.authenticate()
    .then(() => console.log('Succesfully connected with Postgres'))
    .catch((err) => console.log('Error while connecting to Postgres', err));

  api.listen(PORT, () => {
    console.log(`API listening on port ${PORT}...`);
  });
}

init();
