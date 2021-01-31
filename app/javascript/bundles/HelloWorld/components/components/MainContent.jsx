import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid, Button, TextField, Container, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Architecture from "./images/architecture.jpg";
import Japan from "./images/japan.jpg";
import Person from "./images/person.jpg";
import River from "./images/river.jpg";
import grey from "@material-ui/core/colors/grey";

import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "20vh",
  },
  media: {
    height: 200,
  },
  cards: {
    minHeight: "50vh",
  },
  linear: {
    background: "rgb(117,125,232);",
    background:
      "linear-gradient(0deg, rgba(117,125,232,1) 12%, rgba(255,255,255,1) 12%);",
  },
  cardBackground: {
    background: "rgb(117,125,232);",
    background:
      "linear-gradient(0deg, rgba(117,125,232,1) 36%, rgba(255,255,255,1) 36%);",
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: { main: grey[900] },
  },
});
export default function MainContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Typography variant="h5" gutterBottom className={classes.linear}>
              Freedom to move Anywhere
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" gutterBottom>
              <Box fontStyle="oblique">
                No leases. No landlord. No commitments.
              </Box>
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Location"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Check in"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Check out"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="Guests" variant="outlined" />
            
          </Grid>
          <Grid item>
          <ThemeProvider theme={theme}>
              <Button variant="contained" color="primary">
                {" "}
                Search
              </Button>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.cardBackground}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          className={classes.cards}
        >
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Beautiful places
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
