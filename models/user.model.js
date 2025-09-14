const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        FirstName:{
            type: String,
            required: [true, "Please enter User name"]
        },

        MiddleName:{
            type: String,
            required: false
        },

        LastName:{
            type: String,
            required: [true, "Please enter User Name"]
        },

        Age: {
            type: Number,
            required: [true, "Please enter your Age"]
        },

        Gender:{
            type: String,
            required: [true, "Please enter your Gender"]
        },

        Country:{
            type: String,
            required: [true, "Please enter your Country Name"]
        },

        Image:{
            type: String,
            required: false
        }
    }, 
    {
        timestamps: true
    }
)

const User = mongoose.model("User", UserSchema);

module.exports = User;