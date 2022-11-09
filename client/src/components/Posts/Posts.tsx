import React from 'react';
import Post from './Post/Post';
import makeStyles from './styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

function Posts() {
  const posts = useSelector((state: any) => state.posts)
  const classes = makeStyles();
  console.log(posts);

  // Show loading indicator if posts have not yet been retrieved
  if (!posts.length) {
    return ( <CircularProgress /> )
  } else {
    return (
      <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
        {posts.map((post: any) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default Posts;