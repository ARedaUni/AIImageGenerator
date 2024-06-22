const supabase = require('../config/supabase')

exports.signUp = async (req,res) => {
    try{
        const {email, password, name, avatar_url, username} = req.body;
        if(!email || !password || !username) throw new Error("null")
        const { data, error } = await supabase.rpc('add_user', { email, password, username, name, avatar_url });
        if(error) throw new Error(JSON.stringify(error, null, 2))
        res.status(201).send({data})
    }
    catch(e){
        console.log(e);
    }
}


exports.login = (req,res) => {
    const {email, password} = req.body;
    console.log("login function")
    res.status(200).json({send:"login successful"})
}