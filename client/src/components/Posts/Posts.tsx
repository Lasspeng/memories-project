import React from 'react';
import Post from './Post/Post';
import makeStyles from './styles';
import { useSelector } from 'react-redux';

function Posts() {
  const posts = useSelector((state: any) => state.posts)
  const classes = makeStyles();
  console.log(posts);

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  )
}

export default Posts;