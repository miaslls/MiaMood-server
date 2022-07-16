'use strict';

import mongoose from 'mongoose';

const MoodSchema = new mongoose.Schema(
  {
    moodId: { type: String, required: true },
    icon: { type: String, required: true },
    text: { type: String, required: true },
    dateTime: { type: String, required: true },
    createdAt: { type: String, required: true },
  },
  { versionKey: false },
);

const Mood = mongoose.model('Mood', MoodSchema, 'moods');

export default Mood;