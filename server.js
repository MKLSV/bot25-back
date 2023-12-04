const express = require('express')
const cors = require('cors');
const service = require('./service')
const path = require('path');
const bodyParser = require('body-parser');


const port = process.env.PORT || 5000;
const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  // app.use(express.static(path.resolve('public')))
  app.use(express.static(path.join(__dirname, 'client/build')));
} else {
  const corsOptions = {
    origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
    credentials: true,
  }
  app.use(cors(corsOptions))
}

// app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/api/get-data', (req, res) => {
  service.getData()
    .then((data) => {
      console.log(data, 'app-console')
      res.send(data)
    })
    .catch(err => {
      console.log('Error:', err)
      res.status(400).send('Cannot get data')
    })
})
app.get('/api/add', (req, res) => {
  service.add(req.query)
    .then((data) => {
      console.log(data, 'app-console')
      res.send(data)
    })
    .catch(err => {
      console.log('Error:', err)
      res.status(400).send('Cannot get data')
    })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


// app.use(cors({
//   origin: 'http://localhost:3000'
// }));