import React from "react";
import Spacer from "../Spacer/Spacer";
import styles from "./About.module.css";
import photo from "../../images/me.jpg";

const About = () => {
  return (
    <div className={styles.about}>
      <Spacer>
        <h1>About me</h1>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutDescription}>
            <h3>Hi, I'm Ivan. Nice to meet you!</h3>
            <p>
              I'm a Frontend Developer, UI Designer and Digital Marketer located
              in Venezuela. I love everything about my ocupation and I'm a
              naturally curious person. I'm always trying to improve my skills
              and give it all in every project I work in. It's my goal to become
              a better professional day by day and keep designing beautiful
              places in this world called browser! :)
            </p>
          </div>
          <div className={styles.aboutImage}>
            <img
              src={photo}
              alt="Ivan Atias, Developer"
              className={styles.image}
            />
          </div>
        </div>
      </Spacer>
    </div>
  );
};

export default About;
