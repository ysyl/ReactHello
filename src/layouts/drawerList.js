import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import AccountIcon from 'material-ui-icons/AccountCircle';
import StarIcon from 'material-ui-icons/Grade';
import DraftBoxIcon from 'material-ui-icons/Description';
import ClockIcon from 'material-ui-icons/QueryBuilder';
import LabelIcon from 'material-ui-icons/Label';

const styles = {
  list: {
  },
  item: {
    width:'200'
  }
}

const DrawerList = props => {
  const { classes } = props;
  return (
    <List className={classes.list} component="nav">
      <ListItem button >
        <ListItemIcon>
          <AccountIcon />
        </ListItemIcon>
        <ListItemText primary="个人主页" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="我的收藏" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftBoxIcon />
        </ListItemIcon>
        <ListItemText primary="草稿箱" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ClockIcon />
        </ListItemIcon>
        <ListItemText primary="浏览记录" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LabelIcon />
        </ListItemIcon>
        <ListItemText primary="关注的话题" />
      </ListItem>
    </List>
  )
};

export default withStyles(styles)(DrawerList);
