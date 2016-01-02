var express = require('express');
var router = express.Router();
var db = {};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id', function(req, res, next) {
  str = db[req.param.id] ||{};
  res.json(str);
});
// POST
router.post('/:id', function(req, res, next) {
  db[req.param.id] = req.body;
  res.json(req.body);
});
// UPDATE
router.put('/:id', function(req, res, next) {
  db[req.param.id] = req.body;
  res.json(req.body);
});
//DELETE
router.delete('/:id', function(req, res, next) {
  delete db[req.param.id];
  res.json({"msg":"successfully deleted "});

});



  

module.exports = router;

//  var client = require('mongodb').MongoClient;
//var url = 'mongodb://localhost:27017/test';
  //var collection;
//client.connect(url,function(err,db){
 // if(err == null)
  //{
   // console.log("connection correctly to mongo");
   // collection = db.collection('test');
 // }

//});