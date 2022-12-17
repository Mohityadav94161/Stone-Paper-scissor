const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json());

app.use(cors());
// 0  = stone  1 = paper  2 = scissor



app.post('/',(req,res)=>{
    var user1 = req.body.user
    var user2 = req.body.computer
    console.log(req.body)
    if(user1 === 0 && user2 === 0){
        var win = 'Tie'
    }
    if(user1 === 1 && user2 === 1){
        var win = 'Tie'
    }
    if(user1 === 2 && user2 === 2){
        var win = 'Tie'
    }
    //0
    if(user1 === 0 && user2 === 1){
        var win = 'Computer'
    }
    if(user1 === 0 && user2 === 2){
        var win = 'User'
    }
    //1
    if(user1 === 1 && user2 === 0){
        var win = 'User'
        
    }if(user1 === 1 && user2 === 2){
        var win = 'Computer'
        
    }
    //2
    if(user1 === 2 && user2 === 0){
        var win = 'Computer'
    }
    if(user1 === 2 && user2 === 1){
        var win = 'User'
    }

    res.json({
        result:win
    })

})

app.listen(4000, () => {
  console.log("server is running on port : 4000");
});


