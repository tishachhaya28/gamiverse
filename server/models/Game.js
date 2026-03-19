const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Game title is required'],
    trim: true,
    maxlength: 100
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true
  },
  description: {
    type: String,
    required: [true, 'Game description is required'],
    maxlength: 5000
  },
  thumbnail: {
    type: String, // Hosted image URL
    required: true
  },
  gameUrl: {
    type: String, // URL to embed the game (iframe src)
    required: true
  },
  source: {
    type: String,
    enum: ['gamedistribution', 'github', 'gamepix', 'crazygames', 'other'],
    default: 'other'
  },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  isTop: {
    type: Boolean,
    default: false
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  playCount: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

gameSchema.index({ title: 'text', description: 'text' });

module.exports = mongoose.model('Game', gameSchema);
