import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "material-ui-image";
import Dollar from "./images/dollar.png";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "10vh",
  },
  media:{
      padding: "40px"
  },
  img: {
      margin: "auto"
  },
  dollar: {
    backgroundImage: `url(${Dollar})`,
    backgroundSize: 'cover',
    height: 200,
  }
}));

export default function Carousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
      <Container>
        <Slider {...settings}>
            <div>
                <div className={classes.dollar} />
            </div>
        cd </Slider>
      </Container>
    
  );
}
