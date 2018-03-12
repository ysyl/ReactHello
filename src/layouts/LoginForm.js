import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import { withStyles } from 'material-ui/styles';

const sexArr = ["male", "female", "other"];

const styles = theme => ({
    textField: {
      display: 'block',
      margin:"0 auto",
      lineHeight:"3.5",
      width: "15rem"
    }
})

class LoginForm extends Component {
    state = {
      username:'',
      password:'',
    }

    onChange(field) {
        return (e) => {
          this.setState({
            [field]: e.target.value
          });
        }
    };

    render() {
      let { classes } = this.props;
      return (
        <div>
        <TextField
          id="username"
          label="username"
          type="text"
          value={this.state.username}
          onChange={ e => this.onChange("username")(e) }
          className={classes.textField}
          fullWidth
        />
        <TextField
          id="password"
          label="password"
          type="password"
          value={this.state.password}
          onChange={ e => this.onChange("password")(e) }
          className={classes.textField}
          fullWidth
        />
        </div>
      )
    }
}
export default withStyles(styles)(LoginForm);
