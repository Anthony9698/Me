import React from "react";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.About}>
      <div className={styles.Story}>
        <div>
          <h3>How it all began</h3>
          <p>
            I got started programming when I was about 16 (yeah I know, so OLD
            compared to people who get started younger in the womb c;) Back then
            I was convinced learning HTML and CSS the summer before my first
            computer science course in high school would give me an advantage
            with learning Java for the first time. Narrator: it did not. It also
            didn't help one bit that my first computer science course was also
            "advanced". However, I prevailed and found a way to love Java (after
            learning about how annoying Object Oriented Programming was of
            course) and other programming languages like it. Back then, I also
            wondered when I was ever going to get back to web programming, since
            thats where the interest began. This was before I realized full
            stack development was a thing.
          </p>
        </div>
      </div>
      <div className={styles.Story}>
        <div>
          <h3>Nowadays</h3>
          <p>
            These days I find myself doing what I love, full stack development.
            I currently work as full stack engineer for an autonomous truck
            company headquartered in Blacksburg Virginia. I work with other
            smart software engineers designing our own end-to-end software stack
            while also collaborating to create self driving software for testing
            fleets in the real world.
          </p>
        </div>
      </div>
      <div className={styles.Experience}></div>
    </div>
  );
}
