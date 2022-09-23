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
                  p: 6,
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
                      background: "rgb(23,56,80)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "start",
                      flexDirection: "column",
                      width: "448px",
                      p: 4,
                      "&:hover .SeeMore": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Metropolis",
                        fontSize: "30px",
                        lineHeight: "34px",
                        fontWeight: 600,
                        fontStyle: "normal",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Hong Kong Autumn Sales
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Metropolis",
                        fontSize: "18px",
                        lineHeight: "24px",
                        fontWeight: 400,
                        fontStyle: "normal",
                        color: "white",
                        textAlign: "center",
                        mt: 1,
                        mb: 2,
                      }}
                    >
                      2-9 October | Hong Kong
                    </Typography>
                    <Typography
                      className="SeeMore"
                      sx={{
                        fontFamily: "Metropolis",
                        fontSize: "16px",
                        lineHeight: "20px",
                        fontWeight: 500,
                        fontStyle: "normal",
                        color: "#A08737",
                        textTransform: "uppercase",
                      }}
                    >
                      see more
                    </Typography>
                  </Box>
                </NavLink>
              </Box>
            </Box>
            <Box sx={{ width: "100%", height: "100vh", position: "relative" }}>
              <img
                src="/Assets/2.webp"
                alt="Slider"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
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
                  justifyContent: "end",
                  alignItems: "end",
                  p: 6,
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
                      background: "rgb(23,56,80)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "start",
                      flexDirection: "column",
                      width: "448px",
                      p: 4,
                      "&:hover .SeeMore": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Metropolis",
                        fontSize: "30px",
                        lineHeight: "34px",
                        fontWeight: 600,
                        fontStyle: "normal",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Contemporary Curated
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Metropolis",
                        fontSize: "18px",
                        lineHeight: "24px",
                        fontWeight: 400,
                        fontStyle: "normal",
                        color: "white",
                        textAlign: "start",
                        mt: 1,
                        mb: 2,
                      }}
                    >
                      The multihyphenate British star is the curator of this
                      season’s “Contemporary Curated,” including works by
                      Richard Serra, Willem de Kooning, and more.
                    </Typography>
                    <Typography
                      className="SeeMore"
                      sx={{
                        fontFamily: "Metropolis",
                        fontSize: "16px",
                        lineHeight: "20px",
                        fontWeight: 500,
                        fontStyle: "normal",
                        color: "#A08737",
                        textTransform: "uppercase",
                      }}
                    >
                      see more
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
                  objectFit: "fill",
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
                  p: 6,
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
                      background: "rgb(23,56,80)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "start",
                      flexDirection: "column",
                      width: "448px",
                      p: 4,
                      "&:hover .SeeMore": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Metropolis",
                        fontSize: "30px",
                        lineHeight: "34px",
                        fontWeight: 600,
                        fontStyle: "normal",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      The Luxury Edit
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Metropolis",
                        fontSize: "18px",
                        lineHeight: "24px",
                        fontWeight: 400,
                        fontStyle: "normal",
                        color: "white",
                        textAlign: "start",
                        mt: 1,
                        mb: 2,
                      }}
                    >
                      August–October | London, New York & Paris
                    </Typography>
                    <Typography
                      className="SeeMore"
                      sx={{
                        fontFamily: "Metropolis",
                        fontSize: "16px",
                        lineHeight: "20px",
                        fontWeight: 500,
                        fontStyle: "normal",
                        color: "#A08737",
                        textTransform: "uppercase",
                      }}
                    >
                      see more
                    </Typography>
                  </Box>
                </NavLink>
              </Box>
            </Box>
          </Slider>
          <IconButton
            onClick={Prev}
            sx={{
              width: "80px",
              height: "80px",
              position: "absolute",
              left: "20px",
              top: "45%",
            }}
          >
            <ArrowBackIosNewIcon sx={{ color: "#333", fontSize: "36px" }} />
          </IconButton>
          <IconButton
            onClick={Next}
            sx={{
              width: "80px",
              height: "80px",
              position: "absolute",
              right: "20px",
              top: "45%",
            }}
          >
            <ArrowForwardIosIcon sx={{ color: "#333", fontSize: "36px" }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
