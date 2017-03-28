const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use('/api', function (req, res) {
   res.sendFile(__dirname + '/public/index.html');
})

app.listen(3001, function () {
  console.log('got to http://localhost:3001/api')
})