const supabase = require('../config/supabase')
const bcrypt = require('bcrypt')
const asyncHandler = require("express-async-handler");

exports.signUp = asyncHandler(async (req,res) => {
    try{
        const {email, password, name, avatar_url, username} = req.body;
        if(!email || !password || !username) res.status(400); 
        //hash password

        const hashedPassword = await bcrypt.hash(password, 10)
        const { data, error } = await supabase.rpc('add_a_user', { email, password: hashedPassword, username, name, avatar_url });
        if(error) throw new Error(JSON.stringify(error, null, 2))
        res.status(201).send({data})
    }
    catch(e){
        console.log(e);
    }
})


exports.login = asyncHandler((req,res) => {
    const {email, password} = req.body;
    console.log("login function")
    res.status(200).json({send:"login successful"})
})