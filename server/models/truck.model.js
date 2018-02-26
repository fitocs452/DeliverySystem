let mongoose = require('mongoose');

const Truck = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  model: {
    type: Number,
    required: true
  },
  weightCapacity: {
    type: Number,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Truck', Truck);
