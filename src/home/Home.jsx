import React from "react";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.Home}>
      <img src="https://placehold.co/250" alt="this me" />
      <h3>Hello, I'm Anthony</h3>
    </div>
  );
}
