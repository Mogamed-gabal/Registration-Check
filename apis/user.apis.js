const { userValidations } = require('../middleware/user.validations')
const { signUp, signIn } = require('../services/user.services')

const app=require('express').Router()


app.post('/register',userValidations,signUp)
app.post('/login',signIn)







module.exports=app