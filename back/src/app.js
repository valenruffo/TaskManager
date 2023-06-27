const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const mainRouter = require('./routes/mainRouter');

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(mainRouter);


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
  })



module.exports = app