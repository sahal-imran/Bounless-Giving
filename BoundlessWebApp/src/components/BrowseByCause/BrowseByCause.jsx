import React, { useRef } from "react";
import { Box, Container } from "@mui/system";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";

function BrowseByCause() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "white",
          py: 8,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            m: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
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
                width: "180px",
                background: "#A08737",
              },
            }}
          >
            Browse by Category
          </Typography>
          <Box sx={{ flexGrow: 1, width: "100%", mt: 6 }}>
            <Grid container columnSpacing={2} rowSpacing={6}>
              {Categories.map((item, index) => {
                return (
                  <Grid index={index} item md={3} sm={4} xs={12}>
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
                      <Box
                        sx={{
                          width: "100%",
                          height: "300px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={item.imgURL}
                          alt="img"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      {/* Category Name */}
                      <Typography
                        className="dropbtn"
                        sx={{
                          position: "relative",
                          fontFamily: "Metropolis",
                          fontSize: "24px",
                          lineHeight: "38px",
                          fontWeight: 700,
                          fontStyle: "normal",
                          color: "rgb(51,51,51)",
                          textAlign: "start",
                          letterSpacing: "1px",
                          mt: 3,
                        }}
                      >
                        {item.Name}
                      </Typography>
                      {/* Button */}
                      <Button
                        variant="contained"
                        sx={{
                          position: "relative",
                          fontFamily: "Metropolis",
                          fontSize: "24px",
                          lineHeight: "38px",
                          fontWeight: 400,
                          fontStyle: "normal",
                          color: "white",
                          borderRadius: "5px",
                          background: "#A08737",
                          width: "100%",
                          height: "50px",
                          boxShadow: "none",
                          textTransform: "unset",
                          whiteSpace:"nowrap",
                          mt: 1,
                          "&:hover": {
                            background: "#A08737",
                            boxShadow: "none",
                          },
                        }}
                      >
                       Check Now
                      </Button>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default BrowseByCause;

const Categories = [
  {
    Name: "Animals",
    imgURL: "/Assets/Animals.jpg",
  },
  {
    Name: "Arts and Culture",
    imgURL: "/Assets/Arts and Culture.jpg",
  },
  {
    Name: "Aspirational",
    imgURL: "/Assets/Aspirational.jpg",
  },
  {
    Name: "Children",
    imgURL: "/Assets/Children.jpg",
  },
  {
    Name: "Community Development",
    imgURL: "/Assets/Community Development.jpg",
  },
  {
    Name: "Find A Cure",
    imgURL: "/Assets/Find A Cure.jpg",
  },
  {
    Name: "Human Services",
    imgURL: "/Assets/Human Services.jpg",
  },
  {
    Name: "More",
    imgURL: "/Assets/More.jpg",
  },
];
