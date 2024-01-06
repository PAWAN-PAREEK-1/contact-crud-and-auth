const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username:{
        type: 'string',
        require:[true, "username is required"]
    },
    email:{
        type: 'string',
        require:[true, "email is required"],
        unique: [true,"email should be unique"]
    }
    ,password:{
        type: 'string',
        require:[true, "password is required"],

    }
}
,{
    timestamps: true,
}

)

module.exports = mongoose.model('User',userSchema);