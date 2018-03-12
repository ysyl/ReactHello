import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Grid from 'material-ui/Grid';

import WeiboCard from '../components/Home/WeiboCard.js';

let mockData = new Array(30).fill({
  avatar:'R',
  username: 'username',
  images:mediaImg,
  content:`This impressive paella is a perfect party dish and a fun meal to cook together with
  your guests. Add 1 cup of frozen peas along with the mussels, if you like.`,
});

const styles = theme =>({
  content: {
    minHeight:500,
    width: '95%',
    margin: '0 auto',
  },
})

@withStyles(styles)
class Home extends Component {
  constructor() {
    super();
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.content} spacing={16} >
        {mockData.map( (item, index ) => (
          <Grid key={index} item xs={12} sm={6} md={3} >
            <WeiboCard data={item} />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default Home;
