import React from "react";
import "./Footer.css";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <div sticky="bottom" className="footer">
        <div className="footer_left">
          <Typography>Deepak Kumar</Typography>
        </div>
        <div className="footer_right">
          <Typography className="footer_copyryt_text">
            Developer and Design by {""}
            <a href="/" target="_blank">
              Deepak Kumar
            </a>
            <br />
            My Project is {""}
            <a
              href="https://deepak-808.github.io/resume-deepak/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Deepak_resume.
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default Footer;
