const express = require("express");
const cors = require("cors");
const app=express();
const bodyParser = require('body-parser');
const client = require("./database/elephantsql")

require("dotenv").config();

//middleware
app.use(cors());
app.use(bodyParser.json());


const port = process.env.PORT||5000;

client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT NOW() AS "theTime"', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result.rows[0].theTime);
      // >> output: 2018-08-23T14:02:57.117Z
    });
  });


const userRouter = require("./routes/user");
const loggedIn = require("./routes/loggedIn");

app.use("/user",userRouter);
app.use("/loggedIn",loggedIn);

app.listen(port,()=>{
    console.log("Server is started on port: "+port);
})