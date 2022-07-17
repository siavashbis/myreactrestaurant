import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h1>Contact Me, Siavash Mehraein</h1>

      <div className="socialMedia">
        <a href="www.google.com">
          
          <InstagramIcon />
        </a>
        <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
    </div>
  );
}

export default Footer;
