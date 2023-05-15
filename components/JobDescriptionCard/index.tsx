import React from "react";
import styles from "./styles.module.scss";
import { dataDescription } from "../../utils/data";

const JobDescriptionCard = () => {
  return (
    <>
      <main className={styles.outerContainer}>
        <main className={styles.innerContainer}>
          <section className={styles.image}>
            <img src={dataDescription[0].logo.src} alt="hello" />
          </section>
          <main className={styles.description}>
            <section className={styles.title}>
              {dataDescription[0].title}
            </section>
            <section className={styles.information}>
              <div className={styles.agency}>{dataDescription[0].agency}</div>
              <div className={styles.location}>
                {dataDescription[0].location}
              </div>
              <div className={styles.salary}>{dataDescription[0].salary}</div>
            </section>
          </main>
          <section className={styles.buttonSection}>
            <button className={styles.fullTime}>Full Time</button>
            <div>{`${dataDescription[0].posttime} hours ago`}</div>
          </section>
        </main>
      </main>
    </>
  );
};

export default JobDescriptionCard;
