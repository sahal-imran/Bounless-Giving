import React, { useRef } from "react";
import { Box, Container } from "@mui/system";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "white",
          py: 8,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#F1F1F1",
            py: 4,
            px: {
              md: 40,
              xs: 12,
            },
          }}
        >
          <Typography
            className="dropbtn"
            sx={{
              fontFamily: "Merriweather",
              fontSize: "32px",
              lineHeight: "40px",
              fontWeight: 600,
              fontStyle: "normal",
              color: "rgb(51,51,51)",
              textAlign: "center",
              maxWidth: { md: "800px" },
              textTransform: "capitalize",
            }}
          >
            follow us
          </Typography>
          {Social.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.URL}
                sx={
                  index === 3
                    ? {
                        "&:hover svg": {
                          color: "#A08737",
                        },
                        color: "Black",
                        cursor: "pointer",
                        textDecoration: "none",
                      }
                    : {
                        "&:hover svg": {
                          color: "#A08737",
                        },
                        color: "Black",
                        cursor: "pointer",
                        textDecoration: "none",
                        mr: 5,
                      }
                }
              >
                {item.Ico}
              </Link>
            );
          })}
        </Box>
        <Container
          maxWidth="xl"
          sx={{
            m: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Box sx={{ width: "30%" }}>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    flexDirection: "column",
                  }}
                >
                  {/* <Typography
                    className="dropbtn"
                    sx={{
                      position: "relative",
                      fontFamily: "Merriweather",
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: 700,
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
                        height: "2px",
                        width: "40px",
                        background: "#A08737",
                      },
                      mb: 2
                    }}
                  >
                    SUPPORT
                  </Typography> */}

                  {Support.map((item, index) => {
                    return (
                      <NavLink
                        key={index}
                        to={item.URL}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Merriweather",
                            fontSize: "14px",
                            lineHeight: "24px",
                            fontWeight: 300,
                            fontStyle: "normal",
                            color: "#333",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                            letterSpacing: "1px",
                            mb: 2,
                          }}
                        >
                          {item.Name}
                        </Typography>
                      </NavLink>
                    );
                  })}
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    flexDirection: "column",
                  }}
                >
                  {/* <Typography
                    className="dropbtn"
                    sx={{
                      position: "relative",
                      fontFamily: "Merriweather",
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: 700,
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
                        height: "2px",
                        width: "40px",
                        background: "#A08737",
                      },
                      mb: 2,
                    }}
                  >
                    CORPORATE
                  </Typography> */}

                  {CORPORATE.map((item, index) => {
                    return (
                      <NavLink
                        key={index}
                        to={item.URL}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Merriweather",
                            fontSize: "14px",
                            lineHeight: "24px",
                            fontWeight: 300,
                            fontStyle: "normal",
                            color: "#333",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                            letterSpacing: "1px",
                            mb: 2,
                          }}
                        >
                          {item.Name}
                        </Typography>
                      </NavLink>
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Footer;

const Social = [
  {
    Ico: <AiFillFacebook size={40} />,
    URL: "",
  },
  {
    Ico: <BsInstagram size={36} />,
    URL: "",
  },
  {
    Ico: <BsTwitter size={40} />,
    URL: "",
  },
  {
    Ico: <FaTiktok size={40} />,
    URL: "",
  },
];

const Support = [
  {
    Name: "About Us",
    URL: "",
  },
  {
    Name: "Contact",
    URL: "",
  },
  {
    Name: "Get Help",
    URL: "",
  },
];
const CORPORATE = [
  {
    Name: "FAQ",
    URL: "",
  },
  {
    Name: "Terms and Conditions",
    URL: "",
  }
];
