import React from "react";
import styles from "./about.module.css";
import htmlLogo from "../../assets/Technologies/html.png";
import cssLogo from "../../assets/Technologies/css.png";
import javaLogo from "../../assets/Technologies/java.png";
import pythonLogo from "../../assets/Technologies/python.png";
import awsLogo from "../../assets/Technologies/aws.png";
import dockerLogo from "../../assets/Technologies/docker.png";
import reactLogo from "../../assets/Technologies/react.png";
import terraformLogo from "../../assets/Technologies/terraform.png";
import { BiChevronDownCircle } from "react-icons/bi";

export default function About() {
  return (
    <div id="About" className={styles.About}>
      <div className={styles.Story}>
        <div>
          <h3>How it all began</h3>
          <p>
            I got started programming when I was about 16 (yeah I know, so OLD
            compared to people who get started younger 😉) Back then I was
            convinced learning HTML and CSS the summer before my first computer
            science course in high school would give me an advantage with
            learning Java for the first time. Narrator: "It did not". It also
            didn't help one bit that my first computer science course was also
            "advanced". <br />
            <br />
            However, I prevailed and found a way to love Java (after learning
            about how annoying Object Oriented Programming was of course) and
            other programming languages like it. Back then, I also wondered when
            I was ever going to get back to web programming, since thats where
            the interest began. This was before I realized full stack
            development was a thing.
          </p>
        </div>
        <div className={styles.Icons}>
          <div className={styles.Logo}>
            <img src={htmlLogo} alt="html" />
            <div>HTML</div>
          </div>
          <div className={styles.Logo}>
            <img src={cssLogo} alt="css" />
            <div>CSS</div>
          </div>
          <div className={styles.Logo}>
            <img src={javaLogo} alt="java" />
            <div>Java</div>
          </div>
        </div>
        <div>
          <h3>Education</h3>
          <p>
            After my intro to computer science in high school, I decided to make
            it my major in undergrad at the University of Texas at San Antonio
            (Northwest Vista College prior). During my undergrad, I was exposed
            to many different programming languages such C, Python, LISP, SQL,
            and more Java. I also was introduced to dev ops technologies like
            Docker and Git for app containerization and version control. I
            graduated with my Bachelor's degree in Computer science in May of
            2020.
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
        <div className={styles.Icons}>
          <div className={styles.Logo}>
            <img src={reactLogo} alt="react" />
            <div>React</div>
          </div>
          <div className={styles.Logo}>
            <img src={pythonLogo} alt="python" />
            <div>Python</div>
          </div>
          <div className={styles.Logo}>
            <img src={terraformLogo} alt="terraform" />
            <div>Terraform</div>
          </div>
          <div className={styles.Logo}>
            <img src={awsLogo} alt="aws" />
            <div>AWS</div>
          </div>
          <div className={styles.Logo}>
            <img src={dockerLogo} alt="docker" />
            <div>Docker</div>
          </div>
        </div>
        <div>
          <h3>Experience</h3>
          <p>
            I've worked with many different backend languages such as Java,
            Python, and C (even LISP if we're counting undergrad which I HOPE we
            are).
            <br />
            <br />
            With frontend I have experience using React, Angular, Node, HTML,
            and CSS. I've also worked with frameworks such as Bootstrap for
            quickly putting together CSS skeletons.
            <br />
            <br />I also have experience using AWS cloud services such as API
            Gateway, CloudWatch, DynamoDB, Step Functions, Simple Queue Service,
            S3, etc. As far as DevOps, I have experience using terraform for
            managing and creating AWS infrastructure, as well as Docker for
            managing and deploying containers to the cloud, and version control
            with Git.
          </p>
        </div>
      </div>
      <BiChevronDownCircle size={"3em"} className={styles.Arrow} />
    </div>
  );
}
