var express = require('express');
var router = express.Router();

router.get("/",(req,res)=>{
    res.render('hello',{})
})
router.post("/",(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

module.exports = router;
