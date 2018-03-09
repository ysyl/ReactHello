import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Grid from 'material-ui/Grid';

import WeiboCard from './WeiboCard.js';
import mediaImg from './img/paella.jpg';

let mockData = new Array(30).fill({
  avatar:'R',
  username: 'username',
  images:mediaImg,
  content:`This impressive paella is a perfect party dish and a fun meal to cook together with
  your guests. Add 1 cup of frozen peas along with the mussels, if you like.`,
});



const styles = theme =>({
  toolbar: Object.assign(theme.mixins.toolbar, {
    marginBottom: 15,
  }),
  container: {
  },
  content: {
    minHeight:500,
    width: '95%',
    margin: '0 auto',
  },
  item: {
  }
})

class Content extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.toolbar} />
        <Grid container className={classes.content} spacing={16} >
          {mockData.map( (item, index ) => (
            <Grid key={index} item xs={12} sm={6} md={3} >
              <WeiboCard data={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Content);
