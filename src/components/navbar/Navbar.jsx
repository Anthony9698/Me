import React from "react";
import styles from "./navbar.module.css";
import { Nav } from "react-bootstrap";
import { scroller as scroll } from "react-scroll";

export default function Navbar() {
  return (
    <Nav className={styles.Navbar}>
      <Nav.Item>
        <Nav.Link
          onClick={() =>
            scroll.scrollTo("Home", {
              duration: 500,
              smooth: true,
              offset: -100,
            })
          }
        >
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          onClick={() =>
            scroll.scrollTo("About", {
              duration: 500,
              smooth: true,
            })
          }
        >
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
