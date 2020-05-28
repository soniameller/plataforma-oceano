'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture_url: {
    type: String,
  },
  website_url: {
    type: String,
  },
  article: {
    type: String,
  },
  category: {
    type: String,
    enum: ['primary', 'secondary', 'none'],
  },
  methodology: {
    type: String,
    enum: [
      'activity',
      'article',
      'collection',
      'infographic',
      'lesson',
      'map',
      'photograph',
      'unit',
      'video',
    ],
  },
});

module.exports = mongoose.model('Article', schema);
