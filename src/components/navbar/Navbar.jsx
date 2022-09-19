import React from "react";
import styles from "./navbar.module.css";
import { Nav } from "react-bootstrap";
import { scroller as scroll, Link } from "react-scroll";

export default function Navbar() {
  return (
    <Nav id="Navbar" className={styles.Navbar}>
      <Nav.Item>
        <Link to="Home" smooth duration={300} offset={-128}>
          Home
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="About" smooth duration={300} offset={-64}>
          About
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="Projects" smooth duration={300} offset={-64}>
          Projects
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="Contact" smooth duration={300} offset={-64}>
          Contact
        </Link>
      </Nav.Item>
    </Nav>
  );
}
