
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");

app.use(cors());


app.use(bodyParser.json());



//random choices


app.get('/',(req,res)=>{
    var choice = Math.floor(Math.random()*3);
    console.log('choice ', choice)
    res.json({
        number:choice
    })
})

app.listen(4001, () => {
  console.log("server is running on port : 4001");
});









