import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "10vh",
  },
}));

export default function SubContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item>Forbes</Grid>
        <Grid item>Tech crunche</Grid>
        <Grid item>New York times</Grid>
      </Grid>
      <br />
      <Typography variant="h1" component="h2" gutterBottom>
        A New Way of living
      </Typography>
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
      <br />
      <Typography variant="h1" component="h2" gutterBottom>
        A New Way of living
      </Typography>
      To add carousel
      <br />
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
