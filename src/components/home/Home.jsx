import React from "react";
import styles from "./home.module.css";
import Typed from "react-typed";
import me from "../../assets/me.jpg";
import { scroller as scroll } from "react-scroll";
import { BiChevronDownCircle } from "react-icons/bi";

export default function Home() {
  let sen1 = "Hello, my name is Anthony";
  let sen2 = "I'm a full stack developer";

  return (
    <div id="Home" className={styles.Home}>
      <img className={styles.Me} src={me} alt="this me" />
      <h3>
        <Typed
          strings={[sen1, sen2]}
          typeSpeed={60}
          backSpeed={40}
          loop
        ></Typed>
      </h3>
      <BiChevronDownCircle
        size={"3em"}
        className={styles.Arrow}
        onClick={() =>
          scroll.scrollTo("About", {
            duration: 500,
            smooth: true,
            offset: -64,
          })
        }
      />
    </div>
  );
}
