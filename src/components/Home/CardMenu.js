import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import Menu, { MenuItem } from "material-ui/Menu";
import MoreVertIcon from "material-ui-icons/MoreVert";

const styles = theme => ({
  root:{}
});

const ITEM_HEIGHT = 48;

const options = [
  "屏蔽该用户",
  "关于该用户"
];

class CardMenu extends Component {
  constructor() {
    super()
  };

  state = {
    anchorEl:null
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    })
  }

  handleClose = () => {
    this.setState({
      anchorEl: null
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <IconButton onClick={this.handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200
            }
          }}
        >
          { options.map( option => (
            <MenuItem key={option}  onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}

export default withStyles(styles)(CardMenu);
