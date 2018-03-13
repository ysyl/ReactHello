import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import red from 'material-ui/colors/red';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import classnames from 'classnames';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';

import mediaImg from '../../img/paella.jpg';
import CardMenuAndButton from './CardMenu.js';
import CommentsList from './CommentsList.js';


const styles = theme => ({
  card: {
  },
  media: {
    height: 194,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create('transform',{
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500],
  },
  commentList: {
    padding: 0
  }
})

@withStyles(styles)
class WeiboCard extends Component {
  constructor() {
    super();
  }
  state = {
    //详情展开，可用于展示评论
    expanded: false,
  };

  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  };

  render() {
    const { classes, data} = this.props;
    const {
      arthor,
      image,
      content,
      createAt,
      comments
    } = data;
    return (
      <div>
        <Card className={ classes.card }>
          <CardHeader
            avatar={
              <Avatar src={arthor.avatar} className={classes.avatar} />
            }
            action={
              <CardMenuAndButton />
            }
            title={arthor.username}/>
          <CardMedia
            className={classes.media}
            image={image}
            title="MediaImg"
          />
          <CardContent>
            <Typography component="p">
              {content}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ShareIcon />
            </IconButton>

            <Button
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              查看评论
            </Button>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent className={classes.commentList}>
              <CommentsList comments={comments} />
            </CardContent>
          </Collapse>
        </Card>
      </div>
    )
  }
};



export default WeiboCard;
