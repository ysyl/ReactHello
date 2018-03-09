import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import List, { ListItem } from "material-ui/List";
import Divider from 'material-ui/Divider';

import CommentListItem from "./CommentListItem.js";
import CommentForm from "./CommentForm.js";

const styles = theme => ({
  list:{
  },
  listItem: {
    width:'100%',
    padding: 0
  },
});

const findUserByCommentId = id => {
  const usernameList = ["commenter","user","zhou"];
  return usernameList[id - 1];
}

class CommentsList extends Component {
  constructor() {
    super();
  };

  state = {
    replyTo:{
      commentId:0,
      username:"",
      content:"",
    },
  };

  handleClickReply = (id) => {
    return () => {
      console.log(this);
        this.setState({
          replyTo: {
            commentId:id,
            username: findUserByCommentId(id),
            content:""
          }
        });
    }
  }

  render() {
      const { classes,commentDataList } = this.props;

      return (
        <div>
          <List className={classes.list} >
            { commentDataList.map( (comment, index) => (
              <ListItem dense divider key={index}>
                  <CommentListItem comment={comment} onReply={this.handleClickReply(comment.id)} />
              </ListItem>
            ))}
          </List>
          <CommentForm replyTo={this.state.replyTo} />
        </div>
      )
  }
}

export default withStyles(styles)(CommentsList);
