const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require("cors")


const bcypt = require('bcrypt')

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: `localhost`,
    user:  `root`,
    password: ``,
    database: `mydata`
});
app.post("/login",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    db.query("select * from ds_khachhang where username = ? and password = ?",
    [username,password],
    (err,result)=>{
       if(err){
           res.send({err:err});
           res.json();
       }
         if(result){
               res.send(result);
           }
        else{
            res.statusMessage('Login False')
        }
    }

    
    );
})

app.listen(3001, () =>{
    console.log("running on port 3001")
})