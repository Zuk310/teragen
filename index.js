const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const reviewsRoute = require('./routes/review.route');

const PORT = process.env.PORT || 8000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB connection successful'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, './client/build')));

app.use('/reviews', reviewsRoute);

app.get('/test', (req, res) => {
  res.send('app is running');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});
