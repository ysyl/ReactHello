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
  cardHeader: {
    padding: 0
  },
  avatar:{},
  username: {
    textDecoration: 'none',
  }
})

function CommentListItem(props) {
  const { classes, comment, onReply } = props;
  const { arthorName, arthorAvatar, content, createAt, reply } = comment;

  return (
    <Card className={classes.card} elevation={0}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar src={arthorAvatar} />
        }
        action={
          <CardMenu />
        }
        title={
          <Typography component="a" href="#" className={classes.username}>
            {arthorName}
          </Typography>
        }
        />
      <CardContent>
        <Typography>
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onReply}>
          回复
        </Button>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(CommentListItem);
