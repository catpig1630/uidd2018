const express = require('express');
const app = express();
const port = 10095
/******讓req.body可用*****/
var bodyParser=require('body-parser');
var unlencodedParser=bodyParser.urlencoded({extend:false});
app.use(unlencodedParser);
/*************************/
app.listen(port);
app.use(express.static(__dirname + '/public'));
/******讀json檔***********/
id_data_path='./public/name.json';
var fs=require('fs');
id=JSON.parse(fs.readFileSync(id_data_path));
/*************************/
app.post('/ajax_data', function(req, res, next) {
  var Student_ID = req.body.Student_ID;
  if(id[Student_ID]!=undefined) {
    res.send("Hello," + id[Student_ID]);
  }
  else {
    res.send("The ID number is not our team's.");
  }
    
}) 
