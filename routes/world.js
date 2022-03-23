var express = require('express');
var router = express.Router();

const name = "M1061021's world";
const task = ["task1","task2","task3"];
const message = `
      <ul>
        <li>我是第一行</li>
        <li>我是第二行</li>
        <li>那我就是第三行</li>
      </ul>

`

/* GET users listing. */

router.get('/', function(req, res, next) {
  //res.send(`<h1>respond with a ${name} ${message} </h1>`);
  const task = ["task1","task2","task3"];
  var message2 = "<ul>"
  for(let i=0;i<task.length ;i++) {
    message2 += `<li>  ${task[i]}  </li>`
  }
  message2 += "</ul>";
  res.send(`<h1>This is ${name} ${message} ${message2}</h1>`);
});

module.exports = router;