import React from "react";
import styles from "./styles.module.scss";
import background from "../../assets/images/background.webp";
import logo from "../../assets/images/logo.webp";
import Card from "../Card";

const JobProcess = () => {
  return (
    <>
      <main className={styles.mainContainer}>
        {/* inner container margin-top:3em */}
        <main className={styles.innerContainer}>
          <section className={styles.applyProcess}>
            <p>Apply Process</p>
            <h2>How It Works</h2>
          </section>
          <section className={styles.cardCollection}>
            <Card
              image={logo}
              altText={"background Image"}
              heading={"1. Search a job"}
              description={
                "Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea."
              }
            />
            <Card
              image={logo}
              altText={"background Image"}
              heading={"1. Search a job"}
              description={
                "Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea."
              }
            />
            <Card
              image={logo}
              altText={"background Image"}
              heading={"1. Search a job"}
              description={
                "Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea."
              }
            />
          </section>
        </main>
      </main>
    </>
  );
};

export default JobProcess;
