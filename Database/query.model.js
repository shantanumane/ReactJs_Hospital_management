const mongooes=require("mongoose");
const Schema=mongooes.Schema;


let table=new Schema({

    question:{
        type:String
    }

});

module.exports=mongooes.model('table',table);