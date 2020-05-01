const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//schema for how all data will be stored in my backend db

const UserSchema = new Schema({
    email: {
        type: String,
        required : true,
        unique : true
    },
    password: {
        type: String,
        required : true
    },
    climbRating: {
        type: String
    },
    location: {
        type: String
    },
    tripTime: {
        type: String
    },
    token: {
        type: String
    }
});


const User = mongoose.model('user', UserSchema);

module.exports = User;



