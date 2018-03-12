import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from "material-ui/Typography";

const styles = theme => ({
  form: {
    display:'flex',
    justifyContent:'space-around',
    alignItem:'flex-end'
  }
})

@withStyles(styles)
class CommentForm extends Component {
  constructor() {
    super();
  };

  state ={
    content:""
  };

  handleChange= e => {
    this.setState({
      content: e.target.value,
    })
  }

  render() {
    const { classes, commentId, username, replyTo } = this.props;
    let defaultValue = replyTo.commentId !== 0 ? `回复 ${replyTo.username}: ` : "";
    console.log(defaultValue)
    return (
      <div className={classes.form}>
        {
          defaultValue ? <Typography>{defaultValue}</Typography>:""
        }
        <TextField value={this.state.content} onChange={ e => this.handleChange(e)}   />
        <Button>
          提交
        </Button>
      </div>
    )
  }
}
export default CommentForm;
