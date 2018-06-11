var express =require('express');
var app=express();
app.get('/',start);
function start(req,res){
  res.send('hello world!!')
}
app.listen(3000,function(){
  console.log('ServerIsRunning..');
});
