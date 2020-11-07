var express = require('express');
var app = express();
const bodyParser = require('body-parser')

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
})

app.get('/json', (req, res) => {
  const message = process.env.MESSAGE_STYLE === "uppercase" ? "Hello json".toUpperCase() : "Hello json"
  res.json({"message": message})
})

app.get(
  '/now', 
  (req, res, next) => {
    req.time = new Date().toString()
    next()
  }, 
  (req, res) => {
    res.json({"time": req.time})
  }
)

app.get('/:word/echo', (req, res) => {
  res.json({"echo": req.params.word})
})

app.get('/name', (req, res) => {
  res.json({"name": `${req.query.first} ${req.query.last}`})
})






























 module.exports = app;
