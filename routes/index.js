var express = require('express');
var router = express.Router();
//var db = {};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id', function(req, res, next) {
//  str = db[req.param.id] ||{};
  var query = {};
  var key = req.params.id;
  query[key] = {'$exists': true};
  collection.findOne(query, function (err , doc){

    res.json(doc);
    return;
  })
  return;
});
// POST
router.post('/:id', function(req, res, next) {
//  db[req.param.id] = req.body;
  var obj = {};
  console.log(req.params.id);
  obj[req.params.id] = req.body;
  collection.insert(obj, function (err)
  {if (err == null)
    {
      console.log('insert doc fine');
    }

  })
  res.json(req.body);
});



// UPDATE
router.put('/:id', function(req, res, next) {
//  db[req.param.id] = req.body;
  var query = {};
  var key = req.params.id;
  query[key] = {'$exists': true};
  var new_data ={};
  new_data[key] = req.body;
  collection.updateOne (query, {'$set': new_data}, function (err,doc){

    if (err == null ) {

      res.json(req.body);
    }
    return;
  })
  return;
});


//DELETE
router.delete('/:id', function(req, res, next) {
//  delete db[req.param.id];
  var query = {};
  var key = req.params.id;
  query[key] = {'$exists': true};
  collection.deleteOne(query, function (err,doc){
    if (err == null){
      res.json({"msg":"successfully deleted "});

    }
    return;
  })
  return;
});





module.exports = router;

var client = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';
var collection;
client.connect(url,function(err,db){
  if(err == null)
  {
    console.log("connection correctly to mongo");
    collection = db.collection('test');
  }

});