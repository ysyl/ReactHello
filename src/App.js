import React, { Component } from 'react';
import Reboot from 'material-ui/Reboot';
import { withStyles } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Switch, Route } from 'react-router-dom';

import Layout from './layouts/Layout.js';
import Home from './views/Home.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
  },
  toolbar: theme.mixins.toolbar,
});

const theme = createMuiTheme({
  palette: {
    primary: { main: '#fff' }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
});

class App extends Component {

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
          <Reboot />
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </Layout>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
