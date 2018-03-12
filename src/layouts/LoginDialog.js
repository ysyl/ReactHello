import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import MenuItem from 'material-ui/Menu/MenuItem';
import Switch from 'material-ui/Switch';

import RegisterForm from './RegisterForm.js';
import LoginForm from './LoginForm.js';

const styles = theme => ({
    dialog: {
      maxWidth:'200'
    },
})

class LoginDialog extends Component {
  constructor() {
    super();
  };

  state = {
    userInfo: null,
    isRegister: false
  };

  handleSwitch() {
    this.setState({
      isRegister: !this.state.isRegister
    })
  }

  render() {
    const { classes, open, onClose } = this.props;
    let form = this.state.isRegister?<RegisterForm />:<LoginForm />;
    let title = this.state.isRegister?'Register':'Login';

    return (
      <Dialog
        open={open}
        onClose={onClose}
        className={classes.dialog}
      >
        <DialogTitle>{title}</DialogTitle>
            <DialogContent>
              {form}
            </DialogContent>
        <DialogActions>
          <Switch checked={this.state.isRegister} onChange={this.handleSwitch.bind(this)}  />
        </DialogActions>
      </Dialog>
    )
  }
}

export default withStyles(styles)(LoginDialog);
