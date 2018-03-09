import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";
import List, { ListItem, ListItemSecondryAction, ListItemText, ListItemAvatar } from "material-ui/List";
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from "material-ui-icons/MoreVert";
import Grid from "material-ui/Grid";
import Card, { CardHeader, CardContent, CardActions } from "material-ui/Card";
import Button from "material-ui/Button";

import CardMenu from "./CardMenu.js";

const styles = theme => ({
  card:{
    width:'100%',
    padding: 0
  },
  avatar:{
    margin:'10'
  },
  paper: {
    width:'100%',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  content: {
  },
  cardMenu: {
    flexGrow:1,
    display:'flex',
    justifyContent: 'flex-end',
  }
})

function CommentListItem(props) {
  const { classes, comment } = props;

  return (
    <Paper className={classes.paper} elevation={0}>
      <Avatar className={classes.avatar}>
        R
      </Avatar>
      <Typography className={classes.content}>
        <Typography>
          username
        </Typography>
        <Typography>
          {comment.content}
        </Typography>
      </Typography>
      <div className={classes.cardMenu}>
        <CardMenu />
      </div>
    </Paper>
  )
}

export default withStyles(styles)(CommentListItem);
