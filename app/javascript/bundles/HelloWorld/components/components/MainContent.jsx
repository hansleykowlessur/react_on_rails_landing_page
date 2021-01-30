import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid, Button, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Architecture from './images/architecture.jpg';
import Japan from './images/japan.jpg';
import Person from './images/person.jpg';
import River from './images/river.jpg';



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "20vh",
  },
  media: {
    height: 100,
  },
  cards: {
    minHeight: "50vh"
  }
}));

export default function MainContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={6}
      >
        <Grid item>
          <Typography variant="h5" component="h2" gutterBottom>
            Freedom to move Anywhere
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" gutterBottom>
            No leases. No landlord. No commitments.
          </Typography>
        </Grid>
        <Grid item>
          <TextField id="outlined-basic" label="Location" variant="outlined" />
          <TextField id="outlined-basic" label="Check in" variant="outlined" />
          <TextField id="outlined-basic" label="Check out" variant="outlined" />
          <TextField id="outlined-basic" label="Guests" variant="outlined" />
          <Button variant="contained">Search</Button>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center" spacing={2} className={classes.cards}>
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Architecture}
                title="Architecture"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Architecture
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Last minute trip
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardMedia
              className={classes.media}
                image={Japan}
                title="Japan"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Japan
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Beauty of Japan
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardMedia
              className={classes.media}
                image={Person}
                title="Person"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Raining
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Different seasons
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardMedia
              className={classes.media}
                image={River}
                title="River"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  River
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Beautiful places
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
