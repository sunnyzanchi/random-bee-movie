const express = require('express');
const router = express.Router();
const fs = require('fs');

const getSentences = require('../getRandomConsecutiveSentences.js');

/* GET the home page. */
router.get('/', function(req, res, next) {
  fs.readFile('./text', 'utf-8', (err, data) => {
    var sentences = getSentences(data, 3);
    res.render('index', {sentences});
  });
});
/* GET the API */
router.get('/api', function(req, res, next) {
  // If no query string with the number is preset,
  // render the instruction page for the API
  var number = req.query.number || 3;
  if(number < 0)number = 3;
    fs.readFile('./text', 'utf-8', (err, data) => {
      var sentences = getSentences(data, number || 3);
      res.json({sentences});
    });

});

router.get('/about', function(req, res, next){
  res.sendFile('about.html', {root: 'public/html'});
});

//For horizontal images
router.get('/himg', function(req, res, next){
  const options = {
    root: 'public/himg'
  }
  fs.readdir('public/himg', function(err, files){
    if(err)console.log(err);
    else {
      var fileName = files[Math.floor(Math.random() * files.length)];

      res.sendFile(fileName, options, function (err) {
        if (err) {
          console.log(err);
          res.status(err.status).end();
        }
      });
    }
  });
});
//For vertical images
router.get('/vimg', function(req, res, next){
  const options = {
    root: 'public/vimg'
  }
  fs.readdir('public/vimg', function(err, files){
    if(err)console.log(err);
    else {
      var fileName = files[Math.floor(Math.random() * files.length)];

      res.sendFile(fileName, options, function (err) {
        if (err) {
          console.log(err);
          res.status(err.status).end();
        }
      });
    }
  });
});


module.exports = router;
