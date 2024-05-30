
const UserScheme = require('../../models/UserScheme');
const AuthorizeUser = async (req, res) => {
    if(!req.auth)return res.status(401).json({error:'Unauthorized User', auth:false})
    if(!req.token)return res.status(401).json({error:'Unauthorized Token', auth:false})
    try{
        const user = await UserScheme.findOne({email:req.email})
        if(!user)return res.status(404).json({error:'User not found', auth:false})
        res.status(200).json({auth:true,token:req.token, message:"User authorized", user:user})
    }catch(err){
        res.status(500).json({error:"Internal Server error", auth: false})
    }
}
module.exports = {AuthorizeUser}