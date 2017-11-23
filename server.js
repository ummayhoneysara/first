var express = require('express')
var server = express()
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('mongodb://UMMAYHONEYSARA:UMMAYHONEYSARA@ds117956.mlab.com:17956/newclasssara',['testnewclass'])
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())


server.get('/', function (req,res) {
    // var yo=" ";
     db.testnewclass.find(function(err,docs){
    //     docs=JSON.stringify(docs);
    // docs = docs.split(",");
    // for (var i in docs) {
    //     yo+=docs[i]+'\n';
    //   }
   res.send(docs);
    })
 })
 server.post('/', function(req,res){
    db.testnewclass.save(req.body);
    console.log("We are Here to post first data");
    res.json(req.body);
})
 server.post('/1/Temp/', function(req,res){
    db.testnewclass.save(req.body);
    console.log("We are Here to post temp");
    res.json(req.body);
})
server.post('/1/Light/', function(req,res){
    db.testnewclass.save(req.body);
    console.log("We are Here to post light");
    res.json(req.body);
})
server.post('/1/Sound/', function(req,res){
    db.testnewclass.save(req.body);
    console.log("We are Here to post sound");
    res.json(req.body);
})



server.get('/1/Temp/', function (req,res){res.send('here is the temp file')});
server.get('/1/Light/', function (req,res){res.send('here is the light file')});
server.get('/1/Sound/', function (req,res){res.send('here is the sound file')});

server.listen(3000,()=> console.log("listening in 3000"));