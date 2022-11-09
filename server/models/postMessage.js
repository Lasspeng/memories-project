import mongoose from 'mongoose';

// Define the shape of MongoDB documents
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  }},
  { timestamps: true }
)

const postMessage = mongoose.model('postMessage', postSchema);

export default postMessage;