let mongoose = require('mongoose');

const PilotSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  drivingLicense: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: false
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

mongoose.model('Pilot', PilotSchema);

module.exports = mongoose.model('Pilot');
