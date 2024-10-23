import mongoose from "mongoose";

const TrackSchema = new mongoose.Schema({
  program_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Program', 
    required: true 
  },
  title: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  audio_url: {
    type: String,
    required: true
  }
});

const Track = mongoose.model('Track', TrackSchema);
module.exports = Track;
