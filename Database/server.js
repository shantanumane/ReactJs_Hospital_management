const express =require("express")
const app=express();
const path=require('path');
const bodyParser=require('body-parser');
const cors =require('cors');
app.use(cors());
app.use(bodyParser.json());
const structRoute=express.Router();
let table=require('./query.model');


const mongooes=require('mongoose');
mongooes.connect('mongodb://127.0.0.1:27017/query',{ useNewUrlParser: true });
const connection=mongooes.connection;
connection.once("open",function(){
  console.log("mongodb connection is successfull");
})


structRoute.route("/").get(function(req, res)  {
  table.find((err, query) => {
    if (err) {
      console.log(err);
    } else {
      res.json(query);
    }
  });
});


structRoute.route('/:id').get(function(req,res){
  let id=req.params.id;
  table.findById(id,function(err,struct){
    res.json(struct);

  });

});

structRoute.route('/add').post(function(req,res){
    let struct=new table();
    struct.question=req.body.question;
    struct.save(function(err,insert){
      if(err)
      {
        console.log("error cant insert");
      }
      else{
        res.json(insert);
      }
    })
    
});
structRoute.delete('/delete/:id', function (req, res) {
  query.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) return res.status(500).send("There was a problem deleting the user.");
    res.status(200).send("User:  was deleted.");
  });
});
app.use('/query',structRoute);


app.listen(7777,()=>{
    console.log("server stared at port 7777")
})