import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Grid, Button, Container, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Community from "./images/community.png";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "30vh",
    background: "rgb(117,125,232);",
  },
  community: {
    backgroundImage: `url(${Community})`,
    background: "rgb(255,255,255);",
    backgroundSize: "cover",
    height: 300,
  },
}));


const theme = createMuiTheme({
  palette: {
    primary: {main : grey[900]},
  },
});
export default function EndContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container direction="row">
          <Grid item xs>
            <div className={classes.community} />
          </Grid>
          <Grid item xs>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={10}>
                <Typography variant="h3">Join our community circle</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam a vulputate est. Proin sed felis ornare, pretium tortor
                  ac, mattis lorem. Proin in ullamcorper mi. In vehicula justo
                  ut diam placerat, at volutpat sem faucibus. Sed commodo nunc
                  vehicula velit ultrices pulvinar. Integer enim lorem, tempus
                  eu purus id, vulputate mollis nisl. Curabitur a mauris ut ex
                  cursus tempus.
                </Typography>
                <ThemeProvider theme={theme}>
                  <Button variant="contained" color="primary"> Start Now</Button>
                </ThemeProvider>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
