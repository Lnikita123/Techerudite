const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    role:{
        type:String,
        enum:["customer_user","admin_user"]
        
      }

      
    

}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)