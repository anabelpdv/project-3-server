const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
  location:{type: Schema.Types.ObjectId, ref: 'Location' },
  author: {type: Schema.Types.ObjectId, ref: 'User' },
  content:{type: String}
},
{
  timestamps: true,
});


const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
;