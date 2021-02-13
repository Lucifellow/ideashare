const router = require("express").Router();
const bcrypt = require("bcrypt");
const client = require("../database/elephantsql");

const saltRounds = 10;




//add a new user
router.route("/add").post(async(req,res)=>{
    try{
        const {email}=req.body;
        const {username} = req.body;
        const {password} = req.body;

       
        bcrypt.genSalt(saltRounds, async function(err, salt) {
            bcrypt.hash(password, salt, async function(err, hash) {
                // Store hash in database here
                const newUser = await client.query("INSERT INTO users (email,username,password) VALUES($1,$2,$3)",
                [email,username,hash]);

                res.json(newUser);
             });
        });

        

    }catch(err){
        console.error(err.message);
    }

})

//all users
router.route("/").get(async(req,res)=>{
    try{

        const allUsers = await client.query("SELECT * FROM users");
        res.json(allUsers.rows);

    }catch(err){
        console.err(err.message);
    }
})

module.exports=router;