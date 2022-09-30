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

function Hero() {
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
        }}
      >
        <Box
          sx={{
            position: "relative",
            "&:hover button": {
              background: "hsla(0,0%,100%,.48)",
            },
          }}
        >
          <Slider ref={Slider_Ref} {...settings}>
            <Box sx={{ width: "100%", height: "100vh", position: "relative" }}>
              <img
                src="/Assets/1.webp"
                alt="Slider"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  left: 0,
                  top: 0,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "end",
                  p: 4,
                }}
              >
                {/* card */}

                <NavLink
                  to={""}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Box
                    sx={{
                      background: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "400px",
                      p: 2,
                      "&:hover .SeeMore": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Merriweather",
                        fontSize: "20px",
                        lineHeight: "28px",
                        fontWeight: 600,
                        fontStyle: "normal",
                        color: "black",
                        textAlign: "center",
                      }}
                    >
                      Be Boundless
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Merriweather",
                        fontSize: "14px",
                        lineHeight: "20px",
                        fontWeight: 400,
                        fontStyle: "normal",
                        color: "black",
                        textAlign: "center",
                        mt: 1,
                        mb: 2,
                      }}
                    >
                      Delve into our auctions and pop-up stores and
                      <br />
                      support a great cause
                    </Typography>
                    <Typography
                      className="SeeMore"
                      sx={{
                        fontFamily: "Merriweather",
                        fontSize: "16px",
                        lineHeight: "20px",
                        fontWeight: 500,
                        fontStyle: "normal",
                        color: "black",
                        textTransform: "capitalize",
                      }}
                    >
                      Explore Events
                    </Typography>
                  </Box>
                </NavLink>
              </Box>
            </Box>
            <Box sx={{ width: "100%", height: "100vh", position: "relative" }}>
              <img
                src="/Assets/3.webp"
                alt="Slider"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  left: 0,
                  top: 0,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "end",
                  p: 4,
                }}
              >
                {/* card */}

                <NavLink
                  to={""}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Box
                    sx={{
                      background: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      width: "400px",
                      p: 2,
                      "&:hover .SeeMore": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Merriweather",
                        fontSize: "20px",
                        lineHeight: "28px",
                        fontWeight: 600,
                        fontStyle: "normal",
                        color: "black",
                        textAlign: "center",
                      }}
                    >
                      Be Boundless
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Merriweather",
                        fontSize: "14px",
                        lineHeight: "20px",
                        fontWeight: 400,
                        fontStyle: "normal",
                        color: "black",
                        textAlign: "center",
                        mt: 1,
                        mb: 2,
                      }}
                    >
                      Delve into our auctions and pop-up stores and
                      <br />
                      support a great cause
                    </Typography>
                    <Typography
                      className="SeeMore"
                      sx={{
                        fontFamily: "Merriweather",
                        fontSize: "16px",
                        lineHeight: "20px",
                        fontWeight: 500,
                        fontStyle: "normal",
                        color: "black",
                        textTransform: "capitalize",
                      }}
                    >
                      Explore Events
                    </Typography>
                  </Box>
                </NavLink>
              </Box>
            </Box>
          </Slider>
          <IconButton
            onClick={Prev}
            sx={{
              width: "60px",
              height: "60px",
              position: "absolute",
              left: "20px",
              top: "45%",
            }}
          >
            <ArrowBackIosNewIcon sx={{ color: "#333", fontSize: "28px" }} />
          </IconButton>
          <IconButton
            onClick={Next}
            sx={{
              width: "60px",
              height: "60px",
              position: "absolute",
              right: "20px",
              top: "45%",
            }}
          >
            <ArrowForwardIosIcon sx={{ color: "#333", fontSize: "28px" }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
