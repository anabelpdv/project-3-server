const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema ({
  fullName: {
    type: String,
    required: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^.+@.+\..+$/
  },
  encryptedPassword: {
    type: String,
    required: true
  }
},
{
  timestamps: true,
});


const User = mongoose.model('User', userSchema);

module.exports = User;