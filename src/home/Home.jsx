import React from "react";
import styles from "./home.module.css";
import Typed from "react-typed";
import me from "../assets/me.jpg";
import { Button } from "react-bootstrap";
import { FiCornerRightDown } from "react-icons/fi";

export default function Home() {
  let sen1 = "Hello, my name is Anthony";
  let sen2 = "I am a full stack developer";

  return (
    <div className={styles.Home}>
      <img className={styles.Me} src={me} alt="this me" />
      <h3>
        <Typed
          strings={[sen1, sen2]}
          typeSpeed={60}
          backSpeed={40}
          loop
        ></Typed>
      </h3>
      <Button className={styles.Intro} variant="outline-primary">
        Intro
        <FiCornerRightDown size={"2em"} className={styles.Arrow} />
      </Button>
    </div>
  );
}
