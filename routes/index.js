

var express = require('express');
var router = express.Router();

let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Miniboard', messages: messages });
});

// GET 'new' route//
router.get('/new',function(req,res,next){
  res.render('form')  

})

//POST re: 'new' route//

router.post('', function(req,res,next){
  const newMessage = req.body.newMessage
  const newAuthor = req.body.newAuthor
  messages = [...messages,{
    text: req.body.newMessage,
    user: req.body.newAuthor,
    added: new Date()
  }]

  res.redirect('/')
})

module.exports = router;


