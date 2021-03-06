const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema ({
  title: {type: String},
  description: {type: String},
  imageUrl:[{type:String}],
  lat: {type: Number},
  lng: {type:Number}, 
  comments:[{type: Schema.Types.ObjectId, ref: 'Comment' }]
},
{
  timestamps: true,
});


const Location = mongoose.model('Location', locationSchema);

module.exports = Location;