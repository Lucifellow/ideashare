const router = require("express").Router();
const client = require("../database/elephantsql");
const authorization = require("../middleware/authorization");


//when loggedin

router.route("/").get(authorization, async(req,res)=>{
    try{
        const user = await client.query("SELECT username FROM users WHERE user_id = $1",[req.user]);
        res.json(user.rows[0]);
    } catch(err){
        console.error(err.messsage);
        res.status(500).json("Server Error");
    }
})



module.exports = router;