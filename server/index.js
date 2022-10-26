import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

// Set route to localhost:4000/posts
app.use('/posts', postRoutes);

// Limit images to 30mb
app.use(bodyParser.json( {limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded( {limit: '30mb', extended: true }));
app.use(cors());

// Connect server to cloud database
const CONNECTION_URL = 'mongodb+srv://GLiburd:ILoveyou2@cluster0.rpufiyr.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

async function connectToDB() {
  try {
    const server = await mongoose.connect(CONNECTION_URL);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.log(err.message);
  }
}
connectToDB();