import React, { useRef } from "react";
import { Box, Container } from "@mui/system";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Form() {
  const [Title, setTitle] = React.useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

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
            alignItems: "center",
            background: "#F1F1F1",
            flexDirection: "column",
            p: { md: 8, xs: 2 },
          }}
        >
          <Typography
            className="dropbtn"
            sx={{
              fontFamily: "Merriweather",
              fontSize: "24px",
              lineHeight: "32px",
              fontWeight: 600,
              fontStyle: "normal",
              color: "rgb(51,51,51)",
              textAlign: "center",
              maxWidth: { md: "800px" },
            }}
          >
            Keep informed about upcoming events and news about the Boundless
            community of nonprofits
          </Typography>
          <Typography
            className="dropbtn"
            sx={{
              fontFamily: "Merriweather",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 400,
              fontStyle: "normal",
              color: "#333",
              textAlign: "center",
              mt: 4,
            }}
          >
            Receive the best from Boundless delivered to your inbox.
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mt: 8,
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Email */}
              <Box sx={{ width: { md: "80%", xs: "100%" }, mr: { md: 1 } }}>
                <TextField
                  id="standard-basic"
                  label="Email address"
                  variant="standard"
                  sx={{ fontFamily: "Metropolis", width: "100%" }}
                />
              </Box>
              {/* Title */}
              <Box
                sx={{
                  width: { md: "20%", xs: "100%" },
                  mb: "1px",
                  mr: { md: 1 },
                }}
              >
                <FormControl variant="standard" sx={{ width: "100%" }}>
                  <InputLabel
                    sx={{ fontFamily: "Metropolis" }}
                    id="demo-simple-select-standard-label"
                  >
                    Title
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={Title}
                    onChange={handleChange}
                    label="Title"
                    sx={{ fontFamily: "Metropolis" }}
                  >
                    <MenuItem sx={{ fontFamily: "Metropolis" }} value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem sx={{ fontFamily: "Metropolis" }} value={10}>
                      Ten
                    </MenuItem>
                    <MenuItem sx={{ fontFamily: "Metropolis" }} value={20}>
                      Twenty
                    </MenuItem>
                    <MenuItem sx={{ fontFamily: "Metropolis" }} value={30}>
                      Thirty
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 4,
              }}
            >
              <Box sx={{ width: { md: "50%", xs: "100%" }, mr: { md: 1 } }}>
                <TextField
                  sx={{ fontFamily: "Metropolis", width: "100%" }}
                  id="standard-basic"
                  label="First Name"
                  variant="standard"
                />
              </Box>
              <Box sx={{ width: { md: "50%", xs: "100%" }, mr: { md: 1 } }}>
                <TextField
                  sx={{ fontFamily: "Metropolis", width: "100%" }}
                  id="standard-basic"
                  label="Last Name"
                  variant="standard"
                />
              </Box>
            </Box>
          </Box>

          {/* Terms agreement */}
          <Typography
            className="dropbtn"
            sx={{
              fontFamily: "Merriweather",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 400,
              fontStyle: "normal",
              color: "#333",
              textAlign: "center",
              mt: 8,
            }}
          >
            By subscribing you are agreeing to Boundless Giving's Privacy
            Policy. You can unsubscribe from Boundless Giving emails at any time
            by clicking the "Unsubscribe" link in any of your emails.
          </Typography>

          {/* Button */}
          <Button
            variant="contained"
            sx={{
              position: "relative",
              fontFamily: "Merriweather",
              fontSize: "24px",
              lineHeight: "26px",
              fontWeight: 400,
              fontStyle: "normal",
              color: "white",
              borderRadius: "5px",
              background: "#A08737",
              width: "100%",
              height: "60px",
              boxShadow: "none",
              textTransform: "capitalize",
              whiteSpace: "nowrap",
              mt: 1,
              "&:hover": {
                background: "#A08737",
                boxShadow: "none",
              },
              mt: 2,
            }}
          >
            Subscribe now
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default Form;
