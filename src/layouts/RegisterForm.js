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

class RegisterForm extends Component {
    state = {
      username:'',
      password:'',
      name:'',
      sex:'',
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
        <TextField
          id="name"
          label="name"
          type="text"
          value={this.state.name}
          onChange={ e => this.onChange("name")(e) }
          className={classes.textField}
          fullWidth
        />
        <TextField
          select
          id="sex"
          label="sex"
          value={this.state.sex}
          onChange={ e => this.onChange("sex")(e)}
          className={classes.textField}
          fullWidth
        >

          {
            sexArr.map((item, index) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))
          }
        </TextField>
        </div>
      )
    }
}
export default withStyles(styles)(RegisterForm);
