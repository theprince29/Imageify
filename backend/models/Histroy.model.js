const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const historySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId, 
      required: true,
      ref: 'User' 
    },
    imageUrl: {
      type: String,  
      required: true
    }
  },
  {
    timestamps: true  
  }
);


const History = mongoose.model('History', historySchema);

module.exports = History;
