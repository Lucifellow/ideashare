const router = require("express").Router();
const bcrypt = require("bcrypt");
const client = require("../database/elephantsql");
const jwtGen = require("../utils/jwtgen");
const validInfo= require("../middleware/validInfo");
const authorization = require("../middleware/authorization");



//add a new user
router.route("/add").post(validInfo,async(req,res)=>{
    try{
        const {email}= req.body;
        const {username} = req.body;
        const {password} = req.body;


        const alreadyUser = await client.query("SELECT * FROM users WHERE email = $1",
        [email]);

        if(alreadyUser.rows.length!==0){
            return res.status(401).json("User already exist")
        }
       
        const saltRounds = 10;

        bcrypt.genSalt(saltRounds, async function(err, salt) {
            bcrypt.hash(password, salt, async function(err, hash) {
                // Store hash in database here
                const newUser = await client.query("INSERT INTO users (email,username,password) VALUES($1,$2,$3)",
                [email,username,hash]);

                const token = jwtGen(newUser.rows[0].user_id);

                res.json(token);
             });
        });   

    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }

})

//login
router.route("/login").post(validInfo,async(req,res)=>{
    try{
        //destructure
        const{email, password} = req.body;
        //check if user exist
        const currentUser = await client.query("SELECT * FROM users WHERE email = $1", [email]);

        if(currentUser.rows.length === 0){
            return res.status(401).json("Password or Email is incorrect")
        }

        //check if incoming password is the same as the database password
        const validHash = await bcrypt.compare(password, currentUser.rows[0].password);

        if(!validHash){
            return res.status(401).json("Incorrect Password")
        }


        //give token if same password
        const token = jwtGen(currentUser.rows[0].user_id);
        res.json(token);

    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

router.get("/is-verified",authorization,async(req,res)=>{
    try{
        res.json(true);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
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