import axios from 'axios';

const url: string = 'http://localhost:4000/posts';

// Define api calls to be used during action events
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost: any) => axios.post(url, newPost);