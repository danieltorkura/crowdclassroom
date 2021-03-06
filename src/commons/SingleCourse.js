
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
    color: 'black',
  },
  pos: {
    marginBottom: 12,
    color: 'black',
    fontWeight: 700,
  },
  course: {
    border: 3,
    borderStyle: 'solid',
    color: '#000000'
  }
});

export default function SingleCourse(props) {
  const classes = useStyles();

  return (
      <React.Fragment>
    <Card className={classes.root} variant="outlined" >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Course
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.title}
        </Typography>
        <Typography variant="body2" component="p">
         {props.description}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.course}>Get course</Button>
      </CardActions>
    </Card>
    </React.Fragment>
  );
}