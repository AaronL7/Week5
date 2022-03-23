var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.render('author', {
        title: 'The author of this book is very talented.',
        fruits: ['math', 'english', 'chinese']
    })
})

module.exports = router;