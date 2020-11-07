var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

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

































 module.exports = app;
