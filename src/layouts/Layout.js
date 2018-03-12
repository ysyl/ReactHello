import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Reboot from 'material-ui/Reboot';
import { withStyles } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import { Switch, Route, }

import WeiBoDrawer from "./WeiBoDrawer.js";
import SimpleActionBar from "./ActionBar.js";
import LoginDialog from "./LoginDialog.js";

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
  },
  toolbar: theme.mixins.toolbar,
  contentToolbarGap: Object.assign(theme.mixins.toolbar, {
    marginBottom: 15,
  }),
  container: {
  },
  content: {
    minHeight:500,
    width: '95%',
    margin: '0 auto',
  },
});


class Layout extends Component {
  state = {
    isDrawerOpen: false,
    isLoginDialogOpen: false
  };
  handleToggleDrawer(isOpen) {
    return () => {
      this.setState({
        isDrawerOpen: isOpen
      })
    }
  };

  handleDialog(isOpen) {
    const status = {
      open: true,
      close: false
    };
    return () => {
        this.setState({
          isLoginDialogOpen: status[isOpen],
        })
    }
  };

  render() {
    const { classes, children } = this.props;
    return (
          <div className={classes.root} color="primary">
            <SimpleActionBar
              openDrawer={this.handleToggleDrawer(true).bind(this)}
              openDialog={this.handleDialog('open').bind(this)}
            />
            <LoginDialog
              open={this.state.isLoginDialogOpen}
              onClose={this.handleDialog('close').bind(this)}
            />
            <WeiBoDrawer
              variant="permanent"
              isDrawerOpen={this.state.isDrawerOpen}
              closeDrawer={this.handleToggleDrawer(false).bind(this)}
            />
            <div className={classes.container}>
              <div className={classes.contentToolbarGap} />
              {children}
            </div>
          </div>
    );
  }
}

export default Layout;
