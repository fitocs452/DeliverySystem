let mongoose = require('mongoose');

const Package = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  dimensions: {
    type: String,
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

default mongoose.model('Package', Package);
