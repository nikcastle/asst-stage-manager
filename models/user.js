const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Defining model for user collection
const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },

   productions: [
        {
            type: String,
        }
    ],

    id: {
        type: String,
        unique: true,
        required: true
    }


});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;