import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "10vh",
  },
}));

export default function EndContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row">
        <Grid item xs={3}></Grid>
        <Grid item xs>
          <Typography variant="h4">Join our community circle</Typography>
          <Typography variant="h6">Join our community circle</Typography>
          <Button> Start Now</Button>
        </Grid>
      </Grid>
    </div>
  );
}
