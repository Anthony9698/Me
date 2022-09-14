import React from "react";
import styles from "./navbar.module.css";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <Nav className={styles.Navbar}>
      <Nav.Item>
        <Nav.Link>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>About</Nav.Link>
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
