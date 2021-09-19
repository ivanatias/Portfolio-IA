import React from "react";
import Spacer from "../Spacer/Spacer";
import ServiceCard from "./ServiceCard";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={styles.services}>
      <Spacer>
        <h1>Services</h1>
        <ServiceCard />
      </Spacer>
    </div>
  );
};

export default Services;
