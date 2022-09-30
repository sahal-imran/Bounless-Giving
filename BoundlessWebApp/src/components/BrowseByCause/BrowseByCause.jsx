import React, { useRef } from "react";
import { Box, Container } from "@mui/system";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { H1WithLine } from "../Common/Headings/HeadingWithLine";

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
          <H1WithLine Text={"Browse by Cause"} LineWidth={"100px"} />
          <Box sx={{ flexGrow: 1, width: "100%", mt: 6 }}>
            <Grid container columnSpacing={2} rowSpacing={6}>
              {Categories.map((item, index) => {
                if (index === 7) {
                  return (
                    <Grid index={index} item md={3} sm={4} xs={12}>
                      <NavLink
                        to={""}
                        style={{
                          textDecoration: "none",
                          width: "100%",
                          height: "280px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          className="dropbtn"
                          sx={{
                            position: "relative",
                            fontFamily: "Merriweather",
                            fontSize: "20px",
                            lineHeight: "28px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "rgb(51,51,51)",
                            textAlign: "start",
                            letterSpacing: "1px",
                          }}
                        >
                          {item.Name}
                        </Typography>
                      </NavLink>
                    </Grid>
                  );
                } else {
                  return (
                    <Grid index={index} item md={3} sm={4} xs={12}>
                      <NavLink to={""} style={{ textDecoration: "none" }}>
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
                              height: "280px",
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
                              fontFamily: "Merriweather",
                              fontSize: "20px",
                              lineHeight: "28px",
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
                        </Box>
                      </NavLink>
                    </Grid>
                  );
                }
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
    Name: "More Causes",
  },
];
