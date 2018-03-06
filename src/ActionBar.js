import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import classnames from "classnames";

const styles =  theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    overflow: 'hidden',
    position:"fixed"
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function SimpleActionBar(props) {
  const { classes, openDrawer } = props;

  return (
    <div className={classes.root}>
      <AppBar >
        <Toolbar>
          <IconButton className={classes.menuButton} onClick={openDrawer}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="title" className={classes.flex}>
            MyName
          </Typography>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

SimpleActionBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleActionBar);
