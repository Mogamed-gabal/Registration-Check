const  mongoose= require('mongoose')


const schema=mongoose.Schema({
    full_name:String,
    email:String,
    password:String,
    address:String,
    jop:String,
    phone_number:String,
    national_id:String,
    motehr_name:String,
},
{
    timestemps:true
})

module.exports=mongoose.model('user',schema)
