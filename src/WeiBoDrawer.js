import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import DrawerList from './drawerList.js';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';

const drawWidth = 250;

const styles = theme => ({
  drawer: {
    position:'relective',
    border:'0',
  },
  //在侧边栏顶部添加一个空的项目，使得列表整体下移，免得被actionbar覆盖
  toolbar: theme.mixins.toolbar,
})

const WeiBoDrawer = props => {
  const { classes, isDrawerOpen, closeDrawer, variant } = props;

  return (
    <Drawer
        className={classes.drawer}
        open={isDrawerOpen}
        onClose={closeDrawer}
    >
      <DrawerList/>
    </Drawer>
  )
}


export default withStyles(styles)(WeiBoDrawer);
