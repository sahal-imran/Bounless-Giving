import React from "react";
import { Box, Container } from "@mui/system";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";

function LogoBar() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "white",
          boxShadow: "0 2px 4px 0 rgb(0 0 0 / 10%)",position:'relative',
          zIndex:1
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            m: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box sx={{ width: "80px", height: "80px" }}>
            <img
              src="/Assets/logo.png"
              alt="logo"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>

          {/* menu */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80px",
            }}
          >
            {/* AUCTIONS */}
            <Box
              sx={{
                display: "inline-block",
                "&:hover .Menu-Container": {
                  display: "block",
                },
                "&:hover": {
                  background: "#173B83",
                },
                "&:hover .btn": {
                  color: "white",
                },
              }}
            >
              <Typography
                className="btn"
                sx={{
                  fontFamily: "Metropolis",
                  fontSize: "14px",
                  lineHeight: "80px",
                  fontWeight: 500,
                  fontStyle: "normal",
                  color: "#333",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  letterSpacing: "1px",
                  px: 2,
                }}
              >
                AUCTIONS
              </Typography>
              <Box
                className="Menu-Container"
                sx={{
                  display: "none",
                  position: "absolute",
                  left: 0,
                  background: "#173B83",
                  width: "100%",
                  zIndex: 1,
                  // "&::after": {
                  //   content: `""`,
                  //   position: "absolute",
                  //   bottom: "100%",
                  //   borderWidth: "5px",
                  //   borderStyle: "solid",
                  //   borderColor: "transparent transparent red transparent",
                  // },
                }}
              >
                <Container
                  maxWidth="xl"
                  sx={{
                    m: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          p: 4,
                        }}
                      >
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          JEWELRY
                        </Typography>
                        {JEWELRY.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}

                        {/* WINE & SPIRITS */}
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                            mt: 5,
                          }}
                        >
                          WINE & SPIRITS
                        </Typography>
                        {wins.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          p: 4,
                        }}
                      >
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          JEWELRY
                        </Typography>
                        {JEWELRY.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}

                        {/* WINE & SPIRITS */}
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                            mt: 5,
                          }}
                        >
                          WINE & SPIRITS
                        </Typography>
                        {wins.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          p: 4,
                        }}
                      >
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          JEWELRY
                        </Typography>
                        {JEWELRY.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}

                        {/* WINE & SPIRITS */}
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                            mt: 5,
                          }}
                        >
                          WINE & SPIRITS
                        </Typography>
                        {wins.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          p: 4,
                        }}
                      >
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          JEWELRY
                        </Typography>
                        {JEWELRY.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}

                        {/* WINE & SPIRITS */}
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                            mt: 5,
                          }}
                        >
                          WINE & SPIRITS
                        </Typography>
                        {wins.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}
                      </Box>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </Box>

            {/* BUY NOW */}
            <Box
              sx={{
                display: "inline-block",
                "&:hover .Menu-Container": {
                  display: "block",
                },
                "&:hover": {
                  background: "#173B83",
                },
                "&:hover .btn": {
                  color: "white",
                },
              }}
            >
              <Typography
                className="btn"
                sx={{
                  fontFamily: "Metropolis",
                  fontSize: "14px",
                  lineHeight: "80px",
                  fontWeight: 500,
                  fontStyle: "normal",
                  color: "#333",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  letterSpacing: "1px",
                  px: 2,
                }}
              >
                BUY NOW
              </Typography>
              <Box
                className="Menu-Container"
                sx={{
                  display: "none",
                  position: "absolute",
                  left: 0,
                  background: "#173B83",
                  width: "100%",
                  zIndex: 1,
                  // "&::after": {
                  //   content: `""`,
                  //   position: "absolute",
                  //   bottom: "100%",
                  //   borderWidth: "5px",
                  //   borderStyle: "solid",
                  //   borderColor: "transparent transparent red transparent",
                  // },
                }}
              >
                <Container
                  maxWidth="xl"
                  sx={{
                    m: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          p: 4,
                        }}
                      >
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          JEWELRY
                        </Typography>
                        {JEWELRY.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}

                        {/* WINE & SPIRITS */}
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                            mt: 5,
                          }}
                        >
                          WINE & SPIRITS
                        </Typography>
                        {wins.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          p: 4,
                        }}
                      >
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          JEWELRY
                        </Typography>
                        {JEWELRY.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}

                        {/* WINE & SPIRITS */}
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                            mt: 5,
                          }}
                        >
                          WINE & SPIRITS
                        </Typography>
                        {wins.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          p: 4,
                        }}
                      >
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          JEWELRY
                        </Typography>
                        {JEWELRY.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}

                        {/* WINE & SPIRITS */}
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                            mt: 5,
                          }}
                        >
                          WINE & SPIRITS
                        </Typography>
                        {wins.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          p: 4,
                        }}
                      >
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          JEWELRY
                        </Typography>
                        {JEWELRY.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}

                        {/* WINE & SPIRITS */}
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                            mt: 5,
                          }}
                        >
                          WINE & SPIRITS
                        </Typography>
                        {wins.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}
                      </Box>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </Box>

            {/* CREATE AN EVENT */}
            <Box
              sx={{
                display: "inline-block",
                "&:hover .Menu-Container": {
                  display: "block",
                },
                "&:hover": {
                  background: "#173B83",
                },
                "&:hover .btn": {
                  color: "white",
                },
              }}
            >
              <Typography
                className="btn"
                sx={{
                  fontFamily: "Metropolis",
                  fontSize: "14px",
                  lineHeight: "80px",
                  fontWeight: 500,
                  fontStyle: "normal",
                  color: "#333",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  letterSpacing: "1px",
                  px: 2,
                }}
              >
                CREATE AN EVENT
              </Typography>
              <Box
                className="Menu-Container"
                sx={{
                  display: "none",
                  position: "absolute",
                  left: 0,
                  background: "#173B83",
                  width: "100%",
                  zIndex: 1,
                  // "&::after": {
                  //   content: `""`,
                  //   position: "absolute",
                  //   bottom: "100%",
                  //   borderWidth: "5px",
                  //   borderStyle: "solid",
                  //   borderColor: "transparent transparent red transparent",
                  // },
                }}
              >
                <Container
                  maxWidth="xl"
                  sx={{
                    m: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          p: 4,
                        }}
                      >
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          JEWELRY
                        </Typography>
                        {JEWELRY.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}

                        {/* WINE & SPIRITS */}
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                            mt: 5,
                          }}
                        >
                          WINE & SPIRITS
                        </Typography>
                        {wins.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          p: 4,
                        }}
                      >
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          JEWELRY
                        </Typography>
                        {JEWELRY.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}

                        {/* WINE & SPIRITS */}
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                            mt: 5,
                          }}
                        >
                          WINE & SPIRITS
                        </Typography>
                        {wins.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          p: 4,
                        }}
                      >
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          JEWELRY
                        </Typography>
                        {JEWELRY.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}

                        {/* WINE & SPIRITS */}
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                            mt: 5,
                          }}
                        >
                          WINE & SPIRITS
                        </Typography>
                        {wins.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          p: 4,
                        }}
                      >
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          JEWELRY
                        </Typography>
                        {JEWELRY.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}

                        {/* WINE & SPIRITS */}
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                            mt: 5,
                          }}
                        >
                          WINE & SPIRITS
                        </Typography>
                        {wins.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}
                      </Box>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </Box>

            {/* BECOME A BRAND PARTNER  */}
            <Box
              sx={{
                display: "inline-block",
                "&:hover .Menu-Container": {
                  display: "block",
                },
                "&:hover": {
                  background: "#173B83",
                },
                "&:hover .btn": {
                  color: "white",
                },
              }}
            >
              <Typography
                className="btn"
                sx={{
                  fontFamily: "Metropolis",
                  fontSize: "16px",
                  lineHeight: "80px",
                  fontWeight: 500,
                  fontStyle: "normal",
                  color: "#333",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  letterSpacing: "1px",
                  px: 2,
                }}
              >
                BECOME A BRAND PARTNER
              </Typography>
              <Box
                className="Menu-Container"
                sx={{
                  display: "none",
                  position: "absolute",
                  left: 0,
                  background: "#173B83",
                  width: "100%",
                  zIndex: 1,
                  // "&::after": {
                  //   content: `""`,
                  //   position: "absolute",
                  //   bottom: "100%",
                  //   borderWidth: "5px",
                  //   borderStyle: "solid",
                  //   borderColor: "transparent transparent red transparent",
                  // },
                }}
              >
                <Container
                  maxWidth="xl"
                  sx={{
                    m: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          p: 4,
                        }}
                      >
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          JEWELRY
                        </Typography>
                        {JEWELRY.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}

                        {/* WINE & SPIRITS */}
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                            mt: 5,
                          }}
                        >
                          WINE & SPIRITS
                        </Typography>
                        {wins.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          p: 4,
                        }}
                      >
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          JEWELRY
                        </Typography>
                        {JEWELRY.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}

                        {/* WINE & SPIRITS */}
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                            mt: 5,
                          }}
                        >
                          WINE & SPIRITS
                        </Typography>
                        {wins.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          p: 4,
                        }}
                      >
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          JEWELRY
                        </Typography>
                        {JEWELRY.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}

                        {/* WINE & SPIRITS */}
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                            mt: 5,
                          }}
                        >
                          WINE & SPIRITS
                        </Typography>
                        {wins.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                          p: 4,
                        }}
                      >
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          JEWELRY
                        </Typography>
                        {JEWELRY.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}

                        {/* WINE & SPIRITS */}
                        <Typography
                          className="btn"
                          sx={{
                            fontFamily: "Metropolis",
                            fontSize: "16px",
                            lineHeight: "20px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            color: "white",
                            textAlign: "center",
                            mt: 5,
                          }}
                        >
                          WINE & SPIRITS
                        </Typography>
                        {wins.map((item, index) => {
                          return (
                            <NavLink
                              key={index}
                              to={item.URL}
                              style={{
                                textDecoration: "none",
                                fontFamily: "Metropolis",
                                fontSize: "14px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                color: "white",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                marginTop: "16px",
                              }}
                            >
                              {item.Name}
                            </NavLink>
                          );
                        })}
                      </Box>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* input */}
            <Box
              sx={{
                width: "350px",
                height: "46px",
                overflow: "hidden",
                borderRadius: "4px",
                border: "1px solid #e7e7e7",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                style={{
                  fontFamily: "Metropolis",
                  fontSize: "14px",
                  fontWeight: 500,
                  fontStyle: "normal",
                  color: "#333",
                  outline: "none",
                  border: "none",
                  boxShadow: "none",
                  width: "85%",
                  height: "100%",
                  paddingLeft: "16px",
                }}
                placeholder="Search here.."
              />
              <Box
                sx={{
                  width: "15%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SearchIcon sx={{ color: "#333", cursor: "pointer" }} />
              </Box>
            </Box>

            {/* Buy */}
            <IconButton sx={{ ml: 1 }}>
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default LogoBar;

const JEWELRY = [
  {
    Name: "Earrings",
    URL: "",
  },
  {
    Name: "Necklaces",
    URL: "",
  },
  {
    Name: "Rings",
    URL: "",
  },
  {
    Name: "Shop All",
    URL: "",
  },
];

const wins = [
  {
    Name: "Spirits",
    URL: "",
  },
  {
    Name: "win",
    URL: "",
  },
  {
    Name: "barwares",
    URL: "",
  },
];
