import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Grid from 'material-ui/Grid';

import axios from 'axios';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import WeiboCard from '../components/Home/WeiboCard.js';
import { load_allweibo } from '../reducers/WeiboReducers.js';
import { load_commentsByWeiboId } from "../reducers/CommentReducers.js";

import mediaImg from '../img/paella.jpg';

const styles = theme =>({
  content: {
    minHeight:500,
    width: '95%',
    margin: '0 auto',
  },
})

@connect(
  state => ({
    weiboList: state.root.weibo.weiboList,
  }),
  {
    loadWeibo:load_allweibo,
    loadCommentByWeiboId: load_commentsByWeiboId,
    push
  }
)
@withStyles(styles)
class Home extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadWeibo();
  }

  render() {
    const { classes, weiboList, loadCommentByWeiboId } = this.props;
    return (
      <Grid container className={classes.content} spacing={16} >
        {weiboList.map( (item, index ) => (
          <Grid key={index} item xs={12} sm={6} md={3} >
            <WeiboCard
              weibo={item}
              loadCommentByWeiboId={ loadCommentByWeiboId } />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default Home;
