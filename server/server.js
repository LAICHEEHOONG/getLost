const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const expressip = require('express-ip');
require('dotenv').config();
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;
const updateData = require('./routes/api/getLost');
const listData = require('./routes/api/list');
mongoose.connect(mongoUri);

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));
app.use(expressip().getIpInfoMiddleware);

app.use('/api/updateData', updateData);
app.use('/api/list', listData);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/index.html'), function (err) {
      if (err) {
        res.status(404).sendFile(path.join(__dirname, '/view/index.html'));
      }
    });
  })

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})