import mongoose from "mongoose";

const ProgramSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String, // URL of the program's image
    required: true
  },
  tracks: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Track' // Reference to the Track model
  }]
}, { timestamps: true });

export const Program = mongoose.model('Program', ProgramSchema);

