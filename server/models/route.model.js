let mongoose = require('mongoose');

const Route = new mongoose.Schema({
  initialLocation: {
    type: String,
    required: true
  },
  finalLocation: {
    type: String,
    required: true
  },
  pilot: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Pilot'
  },
  truck: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Truck'
  },
  packages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package'
  }],
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

export default mongoose.model('Route', Route);
