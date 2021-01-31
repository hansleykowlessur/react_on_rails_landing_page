import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Link } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "10vh",
  },
}));

export default function Footer() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h6">Of Space</Typography>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nullam a vulputate est. </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h6">Company</Typography>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="caption">
                <Link href="#" onClick={preventDefault} color="inherit">
                  About Design{" "}
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                <Link href="#" onClick={preventDefault} color="inherit">
                  Contact{" "}
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                <Link href="#" onClick={preventDefault} color="inherit">
                  Career{" "}
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                <Link href="#" onClick={preventDefault} color="inherit">
                  Blog{" "}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h6">About</Typography>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="caption">
                <Link href="#" onClick={preventDefault} color="inherit">
                  About Anyplace{" "}
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                <Link href="#" onClick={preventDefault} color="inherit">
                  Contact{" "}
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                <Link href="#" onClick={preventDefault} color="inherit">
                  Career{" "}
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                <Link href="#" onClick={preventDefault} color="inherit">
                  Blog{" "}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h6">Support</Typography>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="caption">
                <Link href="#" onClick={preventDefault} color="inherit">
                  FAQ{" "}
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                <Link href="#" onClick={preventDefault} color="inherit">
                  Contact{" "}
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                <Link href="#" onClick={preventDefault} color="inherit">
                  Lorem{" "}
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                <Link href="#" onClick={preventDefault} color="inherit">
                  Lorem{" "}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        
        </Grid>
      </Grid>
    </div>
  );
}
