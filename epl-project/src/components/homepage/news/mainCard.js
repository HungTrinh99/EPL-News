import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import bgFooter from "../../../images/footernews.png"
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root:{
    color:"white"
  },
  media: {
    height: 300,
  },
  content:{
    backgroundImage:`url(${bgFooter})`,
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.logo}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
          Đại chiến MU - Chelsea: Kịch bản khó lường
          </Typography>
          <Typography variant="body2"  component="p">
          Những tưởng sẽ được chứng kiến một trận cầu hấp dẫn với cơn mưa bàn thắng...
          </Typography>
          {/* <Typography variant="body2" color="secondary" component="div" style={{float:"right"}}>
              #News
          </Typography> */}
          <Link style={{float:'right',color:"#EB5757",fontWeight:'bold'}}>#News</Link>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
