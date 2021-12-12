import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";
import "./Header.css";
import ScrollHeader from "./ScrollHeader";

const Header = () => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  ScrollHeader((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? "shadow" : "";
  const hiddenStyle = shouldHideHeader ? "hidden" : "";
  return (
    <Navbar expand="lg" className={`header ${shadowStyle} ${hiddenStyle}`}>
      <Nav.Link as={NavLink} to="/">
        <Navbar.Brand className="logo">
          <HomeIcon />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link as={NavLink} to="/" className="link-item">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services" className="link-item">
            Services
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" className="link-item">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className="link-item">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
