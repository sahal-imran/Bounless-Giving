import React, { useRef } from "react";
import { Box, Container } from "@mui/system";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { H1WithLine } from "../Common/Headings/HeadingWithLine";

function BrowseByCategory() {
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
          <H1WithLine Text={"Browse by Category"} LineWidth={"100px"} />
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
                        cursor:'pointer'
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

export default BrowseByCategory;

const Categories = [
  {
    Name: "Clothes & Shoes",
    imgURL: "/Assets/bag.webp"
  },
  {
    Name: "Travel",
    imgURL: "/Assets/Clothes & Shoes.webp",
  },
  {
    Name: "Experiences",
    imgURL: "/Assets/Clothes & Shoes.webp",
  },
  {
    Name: "Brand Promotions",
    imgURL: "/Assets/Clothes & Shoes.webp",
  },
  {
    Name: "Jewelry",
    imgURL: "/Assets/Clothes & Shoes.webp",
  },
  {
    Name: "Memorabilia",
    imgURL: "/Assets/cart.webp",
  },
  {
    Name: "Art",
    imgURL: "/Assets/Clothes & Shoes.webp",
  },
  {
    Name: "Brand Discounts",
    imgURL: "/Assets/Clothes & Shoes.webp",
  },
];
