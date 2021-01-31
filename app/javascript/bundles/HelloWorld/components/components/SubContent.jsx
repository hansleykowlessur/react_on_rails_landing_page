import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TechCrunch from "./images/techCrunch.png";

import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
  },
  techcrunch: {
    backgroundImage: `url(${TechCrunch})`,
    backgroundSize: "cover",
    height: 220,
  },
}));

export default function SubContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs>
            <div className={classes.techcrunch} />
            <Typography align="center">
              <Box fontStyle="oblique" m={1}>
                {'"Flexible housing setup"'}
              </Box>
            </Typography>
          </Grid>

          <Grid item xs>
            <div className={classes.techcrunch} />
            <Typography align="center">
              <Box fontStyle="oblique" m={1}>
              {'"Flexible housing setup"'}
              </Box>
            </Typography>
          </Grid>
        </Grid>
        <Carousel />
      </Container>
    </div>
  );
}
