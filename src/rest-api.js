const express = require('express');
const { getDatabaseConnection } = require('./database');

const PORT = process.env.PORT || 8000;

const db = getDatabaseConnection('sequelize_test', 'roberto', '');
const api = express();

async function handler(req, res) {
  const User = db.import(`${__dirname}/db/models/user`);

  const users = await User.findAll();

  res.json({ users });
}

api.get('/', handler);

api.use((req, res, next) => {
  req.db = db;
  next();
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
