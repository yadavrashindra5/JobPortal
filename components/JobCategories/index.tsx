import React from "react";
import styles from "./styles.module.scss";
import construction from "../../assets/images/construction.jpg";
import content from "../../assets/images/content.jpg";
import creative from "../../assets/images/creative.jpg";
import information from "../../assets/images/information.jpg";
import marketing from "../../assets/images/marketing.jpg";
import mobile from "../../assets/images/mobile.jpg";
import design from "../../assets/images/design.jpg";

const JobCategories = () => {
  return (
    <>
      <main className={styles.mainContainer}>
        <div>FEATURED TOURS PACKAGES</div>
        <h2>Browse Top Categories</h2>
        <section className={styles.jobCategories}>
            <div className={styles.card}>
                <img src={design.src} alt="desing and creative" />
                <h5>Design & Creative</h5>
                <p>(653)</p>
            </div>
            <div className={styles.card}>
                <img src={marketing.src} alt="desing and creative" />
                <h5>Sales & Marketing</h5>
                <p>(658)</p>
            </div>
            <div className={styles.card}>
                <img src={mobile.src} alt="desing and creative" />
                <h5>mobile Application</h5>
                <p>(658)</p>
            </div>
            <div className={styles.card}>
                <img src={construction.src} alt="desing and creative" />
                <h5>Construction</h5>
                <p>(658)</p>
            </div>
            <div className={styles.card}>
                <img src={information.src} alt="desing and creative" />
                <h5>Information Technology</h5>
                <p>(653)</p>
            </div>
            <div className={styles.card}>
                <img src={construction.src} alt="desing and creative" />
                <h5>Real Estate</h5>
                <p>(653)</p>
            </div>
            <div className={styles.card}>
                <img src={content.src} alt="desing and creative" />
                <h5>Content Writer</h5>
                <p>(658)</p>
            </div>
            <div className={styles.card}>
                <img src={content.src} alt="desing and creative" />
                <h5>Content Writer</h5>
                <p>(658)</p>
            </div>

        </section>
      </main>
    </>
  );
};

export default JobCategories;
