import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper,Grid, Card, CardMedia, CardHeader,CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TechCrunch from "./images/techCrunch.png";
import Image from "material-ui-image";
import Dollar from "./images/dollar.png";
import Carousel from "./Carousel";


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "10vh",
  },
  media: {
    height: 100,
    width: 300,
  },
  techcrunch: {
    backgroundImage: `url(${TechCrunch})`,
    backgroundSize: 'cover',
    height: 200,
  }
}));

export default function SubContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs>
          <div className={classes.techcrunch} />
        </Grid>

        <Grid item xs>
        <div className={classes.techcrunch} />
        </Grid>
      </Grid>
      <Carousel />
      

      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>Image</Grid>
            <Grid item>Title</Grid>
            <Grid item>Quote</Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>Image</Grid>
            <Grid item>Title</Grid>
            <Grid item>Quote</Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>Image</Grid>
            <Grid item>Title</Grid>
            <Grid item>Quote</Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
