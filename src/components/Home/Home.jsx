import React from "react";
import Spacer from "../Spacer/Spacer";
import styles from "./Home.module.css";
import Particles from "react-particles-js";
import Typed from "react-typed";
import avatar from "../../images/avataradobe.png";

const Home = () => {
  const ocupationArr = [
    "Frontend Developer",
    "UI Designer",
    "Digital Marketing",
  ];

  return (
    <div className={styles.home}>
      <Particles
        className={styles.particles}
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: false,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <Spacer>
        <div className={styles.homeContainer}>
          <div className={styles.greeting}>
            <h1>Welcome to my Portfolio!</h1>
            <Typed
              strings={ocupationArr}
              typeSpeed={30}
              backSpeed={30}
              loop
              className={styles.typed}
            />
          </div>
          <div className={styles.imageContainer}>
            <img src={avatar} alt="Ivan Atias" className={styles.avatar} />
          </div>
        </div>
      </Spacer>
    </div>
  );
};

export default Home;
