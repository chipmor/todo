import React from "react"
import styled from "@emotion/styled";
import {Link, Typography} from "@mui/material";

const Footer = () => {
  const FooterContainer = styled('div')({
    display: "flex",
    height: "10vh",
    justifyContent: "space-around",
    borderTop: "1px solid lightgrey",
    backgroundColor: '#ccd7e1ad'
  });

  return (
    <FooterContainer>
      <Typography variant="subtitle1">Chip Morrow: chipmorrow94@gmail.com</Typography>

      <Typography variant="subtitle1">
        <a target="_blank" href="https://www.linkedin.com/in/chipmorrow">www.linkedin.com/in/chipmorrow</a>
      </Typography>
    </FooterContainer>);
}

export default Footer;