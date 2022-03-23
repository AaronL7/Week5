var express = require('express');
var router = express.Router();
const data = ["task1","task2","task3","task4"]

/* GET users listing. */
router.get('/', function(req, res, next) {
  var message = "<ul>"

  for(let i = 0; i<data.length; i++){
    message += `<li> ${data[i]} </li>`
  }
  message += "</ul>"
  res.send(`<h1> respond with ${message} </h1>`);
});

module.exports = router;
