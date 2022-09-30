import React, { useRef } from "react";
import { Box, Container } from "@mui/system";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";

var settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function HowToCreateEvent() {
  const Slider_Ref = useRef();
  const Next = () => {
    Slider_Ref.current.slickNext();
  };

  const Prev = () => {
    Slider_Ref.current.slickPrev();
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "white",
          py: 4,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            m: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            className="dropbtn"
            sx={{
              position: "relative",
              fontFamily: "Merriweather",
              fontSize: "30px",
              lineHeight: "36px",
              fontWeight: 600,
              fontStyle: "normal",
              color: "rgb(51,51,51)",
              textAlign: "center",
              letterSpacing: "1px",
              alignSelf: "center",
            }}
          >
            Learn More About How To Create Your Online Event With Boundless
            Giving
          </Typography>
          <Box
            sx={{
              width: "75%",
              m: "auto",
              height: "70vh",
              mt: 3,
            }}
          >
            <img
              src="/Assets/3.webp"
              alt="Slider"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default HowToCreateEvent;
