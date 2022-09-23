import React from "react";
import { Box, Container } from "@mui/system";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Box sx={{ width: "100%", background: "#173B83" }}>
      <Container
        maxWidth="xl"
        sx={{
          m: "auto",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <NavLink to={""} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontFamily: "Metropolis",
              fontSize: "14px",
              lineHeight: "39px",
              fontWeight: 500,
              fontStyle: "normal",
              color: "white",
              textAlign: "center",
              whiteSpace: "nowrap",
              letterSpacing: "1px",
              px: 2,
              "&:hover": {
                background: "white",
                color: "#173B83",
              },
            }}
          >
            Log in
          </Typography>
        </NavLink>
        <NavLink to={""} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontFamily: "Metropolis",
              fontSize: "14px",
              lineHeight: "39px",
              fontWeight: 500,
              fontStyle: "normal",
              color: "white",
              textAlign: "center",
              whiteSpace: "nowrap",
              letterSpacing: "1px",
              px: 2,
              "&:hover": {
                background: "white",
                color: "#173B83",
              },
            }}
          >
            About
          </Typography>
        </NavLink>

        {/* dropdown */}
        <Box className="dropdown">
          <Typography
            className="dropbtn"
            sx={{
              fontFamily: "Metropolis",
              fontSize: "14px",
              lineHeight: "39px",
              fontWeight: 500,
              fontStyle: "normal",
              color: "white",
              textAlign: "center",
              whiteSpace: "nowrap",
              letterSpacing: "1px",
              px: 2,
              "&:hover": {
                background: "white",
                color: "#173B83",
              },
            }}
          >
            Services
          </Typography>
          <Box
            component={"div"}
            className="dropdown-content"
            sx={{
              display: "none",
              position: "absolute",
              background: "white",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              zIndex: 2,
              overflow: "hidden",
              borderBottomRightRadius: "4px",
              borderBottomLeftRadius: "4px",
            }}
          >
            <NavLink to={""} style={{ textDecoration: "none", width: "100%" }}>
              <Typography
                sx={{
                  width: "100%",
                  fontFamily: "Metropolis",
                  fontSize: "14px",
                  lineHeight: "39px",
                  fontWeight: 500,
                  fontStyle: "normal",
                  color: "#173B83",
                  textAlign: "start",
                  whiteSpace: "nowrap",
                  letterSpacing: "1px",
                  mr: 5,
                  px: 3,
                }}
              >
                Products
              </Typography>
            </NavLink>
            <NavLink to={""} style={{ textDecoration: "none", width: "100%" }}>
              <Typography
                sx={{
                  width: "100%",
                  fontFamily: "Metropolis",
                  fontSize: "14px",
                  lineHeight: "39px",
                  fontWeight: 500,
                  fontStyle: "normal",
                  color: "#173B83",
                  textAlign: "start",
                  whiteSpace: "nowrap",
                  letterSpacing: "1px",
                  px: 3,
                }}
              >
                Products
              </Typography>
            </NavLink>
          </Box>
        </Box>

        <NavLink to={""} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontFamily: "Metropolis",
              fontSize: "14px",
              lineHeight: "39px",
              fontWeight: 500,
              fontStyle: "normal",
              color: "white",
              textAlign: "center",
              whiteSpace: "nowrap",
              letterSpacing: "1px",
              px: 2,
              "&:hover": {
                background: "white",
                color: "#173B83",
              },
            }}
          >
            View
          </Typography>
        </NavLink>

        <NavLink to={""} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontFamily: "Metropolis",
              fontSize: "14px",
              lineHeight: "39px",
              fontWeight: 500,
              fontStyle: "normal",
              color: "white",
              textAlign: "center",
              whiteSpace: "nowrap",
              letterSpacing: "1px",
              px: 2,
              "&:hover": {
                background: "white",
                color: "#173B83",
              },
            }}
          >
            Help
          </Typography>
        </NavLink>
      </Container>
    </Box>
  );
}

export default Navbar;
