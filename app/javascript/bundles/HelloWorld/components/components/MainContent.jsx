import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid, Button, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Architecture from './images/architecture.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "10vh",

  },
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
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                image={Architecture}
                title="Contemplative Reptile"
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
                image=""
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                image=""
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                image=""
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
