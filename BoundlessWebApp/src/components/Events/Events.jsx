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
import { H1WithLine } from "../Common/Headings/HeadingWithLine";

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
        py:5
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
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <H1WithLine Text={"Events happening right now"} LineWidth={"100px"} />
          {/* <NavLink
            to={""}
            style={{
              textDecoration: "none",
              fontFamily: "Merriweather",
              fontSize: "16px",
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
          </NavLink> */}
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
                    <Box sx={{ width: "100%", height: "300px" }}>
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
                        fontFamily: "Merriweather",
                        fontSize: "14px",
                        lineHeight: "24px",
                        fontWeight: 300,
                        fontStyle: "normal",
                        color: "#333",
                        textAlign: "start",
                        letterSpacing: "1px",
                        mt:3
                      }}
                    >
                      {item.Name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        mt: 2,
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          fontFamily: "Merriweather",
                          fontSize: "16px",
                          lineHeight: "20px",
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
                          width: "160px",
                          height: "46px",
                          letterSpacing: "1px",
                          mr: 2,
                        }}
                      >
                        Explore
                      </Button>
                      <NavLink to={""} style={{ textDecoration: "none" }}>
                        <BsInfoCircle size={24} />
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
              width: "50px",
              height: "50px",
              position: "absolute",
              left: "20px",
              top: "30%",
            }}
          >
            <ArrowBackIosNewIcon sx={{ color: "white", fontSize: "24px" }} />
          </IconButton>
          <IconButton
            onClick={Next}
            sx={{
              width: "50px",
              height: "50px",
              position: "absolute",
              right: "20px",
              top: "30%",
            }}
          >
            <ArrowForwardIosIcon sx={{ color: "white", fontSize: "24px" }} />
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
    Name: "The Big Wave of Giving Beneftting Life Rolls On Coming this Fall",
  },
  {
    URL: "/Assets/event2.webp",
    Name: "The Big Wave of Giving Beneftting Life Rolls On Coming this Fall",
  },
  {
    URL: "/Assets/event3.webp",
    Name: "The Big Wave of Giving Beneftting Life Rolls On Coming this Fall",
  },
  {
    URL: "/Assets/event4.webp",
    Name: "The Big Wave of Giving Beneftting Life Rolls On Coming this Fall",
  },
  {
    URL: "/Assets/event2.webp",
    Name: "The Big Wave of Giving Beneftting Life Rolls On Coming this Fall",
  },
  {
    URL: "/Assets/event3.webp",
    Name: "The Big Wave of Giving Beneftting Life Rolls On Coming this Fall",
  },
];
