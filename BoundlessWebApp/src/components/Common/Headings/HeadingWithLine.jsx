import React from "react";
import Typography from "@mui/material/Typography";

export function H1WithLine({ Text, LineWidth }) {
  return (
    <Typography
      sx={{
        position: "relative",
        fontFamily: "Merriweather",
        fontSize: "30px",
        lineHeight: "60px",
        fontWeight: 600,
        fontStyle: "normal",
        color: "rgb(51,51,51)",
        textAlign: "center",
        whiteSpace: "nowrap",
        letterSpacing: "1px",
        textTransform:"capitalize",
        "&::after": {
          position: "absolute",
          bottom: "0px",
          left: "0px",
          content: `""`,
          height: "2px",
          // +923047212779
          width: `${LineWidth}`,
          background: "#A08737",
        },
      }}
    >
      {Text}
    </Typography>
  );
}
