import React from "react";
import styles from "./home.module.css";
import Typed from "react-typed";

export default function Home() {
  let sen1 = "Hello, my name is Anthony";
  let sen2 = "I am a full stack developer";
  let sen3 = "I like working on the frontend";
  let sen4 = "I like working on the backend";
  let sen5 = "I like using the cloud";

  return (
    <div className={styles.Home}>
      <img src="https://placehold.co/250" alt="this me" />
      <h3>
        <Typed
          strings={[sen1, sen2, sen3, sen4, sen5]}
          typeSpeed={60}
          backSpeed={40}
          loop
        ></Typed>
      </h3>
    </div>
  );
}
