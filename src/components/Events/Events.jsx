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
import { BsInfoCircle } from "react-icons/bs";

var settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
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

function Events() {
  const Slider_Ref = useRef();
  const Next = () => {
    Slider_Ref.current.slickNext();
  };

  const Prev = () => {
    Slider_Ref.current.slickPrev();
  };

  return (
    <Box
      sx={{
        width: "100%",
        background: "white",
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
          py: 4,
        }}
      >
        {/* Haeding section */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 10,
          }}
        >
          <Typography
            className="dropbtn"
            sx={{
              position: "relative",
              fontFamily: "Metropolis",
              fontSize: "70px",
              lineHeight: "95px",
              fontWeight: 600,
              fontStyle: "normal",
              color: "rgb(51,51,51)",
              textAlign: "center",
              whiteSpace: "nowrap",
              letterSpacing: "1px",
              "&::after": {
                position: "absolute",
                bottom: "0px",
                left: "0px",
                content: `""`,
                height: "3px",
                width: "100px",
                background: "#A08737",
              },
            }}
          >
            Events
          </Typography>
          <NavLink
            to={""}
            style={{
              textDecoration: "none",
              fontFamily: "Metropolis",
              fontSize: "18px",
              lineHeight: "26px",
              fontWeight: 500,
              fontStyle: "normal",
              color: "#173B83",
              whiteSpace: "nowrap",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            view all
          </NavLink>
        </Box>

        {/* cards */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            mt: 6,
            "&:hover button": {
              background: "hsla(0,0%,100%,.48)",
            },
            "&:hover svg": {
              color: "#333",
            },
          }}
        >
          <Slider ref={Slider_Ref} {...settings}>
            {cards.map((item, index) => {
              return (
                <Box key={index} sx={{ width: "100%", px: 1 }}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "start",
                      flexDirection: "column",
                    }}
                  >
                    {/* image */}
                    <Box sx={{ width: "100%", height: "400px" }}>
                      <img
                        src={item.URL}
                        alt="img"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Typography
                      className="dropbtn"
                      sx={{
                        position: "relative",
                        fontFamily: "Metropolis",
                        fontSize: "24px",
                        lineHeight: "32px",
                        fontWeight: 700,
                        fontStyle: "normal",
                        color: "rgb(51,51,51)",
                        textAlign: "start",
                        letterSpacing: "1px",
                        mt: 2,
                        height: "80px",
                      }}
                    >
                      {item.Name}
                    </Typography>
                    <Typography
                      className="dropbtn"
                      sx={{
                        position: "relative",
                        fontFamily: "Metropolis",
                        fontSize: "16px",
                        lineHeight: "24px",
                        fontWeight: 300,
                        fontStyle: "normal",
                        color: "#333",
                        textAlign: "start",
                        letterSpacing: "1px",
                      }}
                    >
                      {item.des}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        mt: 1,
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          fontFamily: "Metropolis",
                          fontSize: "18px",
                          lineHeight: "24px",
                          fontWeight: 400,
                          fontStyle: "normal",
                          color: "#A08737",
                          borderColor: "#A08737",
                          boxShadow: "none",
                          borderRadius: "8px",
                          "&:hover": {
                            borderColor: "#A08737",
                            boxShadow: "none",
                          },
                          textTransform: "capitalize",
                          width: "200px",
                          height: "56px",
                          letterSpacing: "1px",
                          mr: 2,
                        }}
                      >
                        Bid
                      </Button>
                      <NavLink to={""} style={{ textDecoration: "none" }}>
                        <BsInfoCircle size={30} />
                      </NavLink>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Slider>
          <IconButton
            onClick={Prev}
            sx={{
              width: "60px",
              height: "60px",
              position: "absolute",
              left: "20px",
              top: "28%",
            }}
          >
            <ArrowBackIosNewIcon sx={{ color: "white", fontSize: "30px" }} />
          </IconButton>
          <IconButton
            onClick={Next}
            sx={{
              width: "60px",
              height: "60px",
              position: "absolute",
              right: "20px",
              top: "28%",
            }}
          >
            <ArrowForwardIosIcon sx={{ color: "white", fontSize: "30px" }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Events;

const cards = [
  {
    URL: "/Assets/event1.webp",
    Name: "Contemporary Curated",
    des: "14–22 September 2022 | 3:00 PM CEST | Paris",
  },
  {
    URL: "/Assets/event2.webp",
    Name: "SUBLIME BEAUTY: Korean ",
    des: "15–22 September 2022 | 10:00 AM EDT | New York",
  },
  {
    URL: "/Assets/event3.webp",
    Name: "Property from the Collection of Dr. L",
    des: "22 September 2022 | 12:00 PM EDT | New York",
  },
  {
    URL: "/Assets/event4.webp",
    Name: "Made in Britain",
    des: "16–23 September 2022 | 11:00 AM BST | London",
  },
  {
    URL: "/Assets/event2.webp",
    Name: "SUBLIME BEAUTY: Korean ",
    des: "15–22 September 2022 | 10:00 AM EDT | New York",
  },
];
