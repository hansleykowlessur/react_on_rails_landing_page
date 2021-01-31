import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Architecture from "./images/architecture.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "10vh",
  },
  media: {
    padding: "40px",
  },
  img: {
    margin: "auto",
    width: "auto",
    height: 200,
  },
  content: {
    flex: "1 0 auto",
  },
}));

function CustomArrows(props){
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "inline", background: "rgb(117,125,232)", borderRadius: "100px" }}
      onClick={onClick}
    />
  );
}


export default function Carousel() {
  const classes = useStyles();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1
  };
  return (
    <Container className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Typography variant="h4" align="center">Response from our client</Typography>
          <Slider {...settings}>
            <div>
              <Card>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    Live From Space
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Mac Miller
                  </Typography>
                </CardContent>
                <CardMedia className={classes.img} image={Architecture} />
              </Card>
            </div>
            <div>
              <Card>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    Live From Space
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Mac Miller
                  </Typography>
                </CardContent>
                <CardMedia className={classes.img} image={Architecture} />
              </Card>
            </div>
            <div>
              <Card>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    Live From Space
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Mac Miller
                  </Typography>
                </CardContent>
                <CardMedia className={classes.img} image={Architecture} />
              </Card>
            </div>
            <div>
              <Card>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    Live From Space
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Mac Miller
                  </Typography>
                </CardContent>
                <CardMedia className={classes.img} image={Architecture} />
              </Card>
            </div>
          </Slider>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Container>
  );
}
