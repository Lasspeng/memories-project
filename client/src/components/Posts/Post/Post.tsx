import React from 'react';
import makeStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import CardHeader from '@mui/material/CardHeader';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

function Post({ post }) {
  const classes = makeStyles();

  return (
    <Card className={classes.title}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <CardHeader
          title={post.creator}
          subheader={moment(post.createdAt).fromNow()}
        />
        {/* <Button style={{color: 'black'}} size='small' onClick={() => {}}>
          <MoreHorizIcon fontSize='medium' />
        </Button> */}
      </div>
      {post.selectedFile !== '' && 
        <CardMedia
        component='img'
        image={post.selectedFile}
        />
      }
      <CardContent>
        <Typography variant='body2' color='textSecondary'>
          {post.tags[0].split(' ').map((tag: string) => `#${tag} `)}
        </Typography>
        <Typography className={classes.title} variant='body2'>
          {post.message}
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing className={classes.cardActions}>
        <Button size='small' color='primary' onClick={() => {}}>
          <ThumbUpAltIcon aria-label='Like' fontSize='small' />
          {post.likeCount}
        </Button>
        <Button size='small' color='primary' onClick={() => {}}>
          <DeleteIcon aria-label='delete' fontSize='small' />
        </Button>
      </CardActions> */}
    </Card>
  )
}

export default Post;