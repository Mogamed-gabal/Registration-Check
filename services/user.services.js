const userModels = require("../models/user.models");
const bcrypt = require('bcrypt');
const saltRounds = 4;

module.exports.signUp=async (req,res)=>{
const{full_name,email,password,address,jop,phone_numper,national_id,motehr_name}=req.body
const userMaile=await userModels.findOne({email})
if(userMaile)
{
    res.json('email is already exist')
}
else
{
    bcrypt.hash(password, saltRounds,async function(err, hash) {
        let userData= await userModels.insertMany({full_name,email,password:hash,address,jop,phone_numper,national_id,motehr_name})
    res.json({message:'success',userData})
    });
    
}


}

module.exports.signIn=async (req,res)=>{
    const{email,password}=req.body
    let user=await userModels.findOne({email})
    if(user)
    {
        const match = await bcrypt.compare(password,user.password);

        if(match)
        {
            res.json({message:'success',user})
        }else
        {
            res.json({message:'password is inncorect'})
        }
    }else
    {
        res.json('email dos not exist')
    }
}