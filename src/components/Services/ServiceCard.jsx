import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPalette,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ServiceCard.module.css";

const cardElements = [
  {
    title: "Frontend Development",
    description:
      "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    skills: "HTML, CSS, Javascript, React",
    icon: faCode,
  },

  {
    title: "UI Design",
    description:
      "I value simple content structure, clean design patterns, and thoughtful interactions.",
    skills: "UI, Web Design, Mobile App Design",
    icon: faPalette,
  },

  {
    title: "Digital Marketing",
    description:
      "I do my best to improve the social media presence of any brand I work with.",
    skills: "Facebook Ads, Branding, Community Management",
    icon: faBullhorn,
  },
];

const ServiceCard = () => {
  return (
    <div className={styles.serviceCardContainer}>
      {cardElements.map((element, index) => (
        <div className={styles.serviceCard} key={index}>
          <div className={styles.cardHeader}>
            <FontAwesomeIcon
              icon={element.icon}
              size="lg"
              className={styles.icon}
            />
            <h3>{element.title}</h3>
          </div>
          <div className={styles.cardBody}>
            <p>{element.description}</p>
          </div>
          <div className={styles.cardFooter}>
            <p>{element.skills}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
