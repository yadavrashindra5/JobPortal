import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/images/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaHeart,FaCanadianMapleLeaf,FaAmazonPay,FaFacebook,FaTwitter,FaLinkedin,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <main className={styles.mainContainer}>
      <main className={styles.upperContent}>
        <section className={styles.aboutSection}>
          <div className={styles.title}>ABOUT US</div>

          <div className={styles.description}>
            Heaven frucvitful doesn't cover lesser dvsays appear creeping
            seasons so behold.
          </div>
        </section>

        <section className={styles.contactSection}>
          <div className={styles.title}>CONTACT INFO</div>
          <div>Address :Your address goes here, your demo address.</div>
          <ul className={styles.contactInfo}>
            <li>Phone : +8880 44338899</li>
            <li>Email : info@colorlib.com</li>
          </ul>
        </section>

        <section className={styles.linkSection}>
          <div className={styles.title}>IMPORTANT LINK</div>
          <ul>
            <li>View Project</li>
            <li>Contact Us</li>
            <li>Testimonial</li>
            <li>Proparties</li>
            <li>Support</li>
          </ul>
        </section>

        <section className={styles.newsSection}>
          <div className={styles.title}>NEWSLETTER</div>
          <div className={styles.description}>
            Heaven fruitful doesn't over lesser in days. Appear creeping.
          </div>
        </section>
      </main>
      <main className={styles.middleContent}>
        <section>
          <img src={logo.src} alt="" />
        </section>
        <div>5000+ Talented Hunter</div>
        <div>451 Talented Hunter</div>
        <div>568 Talented Hunter</div>
      </main>
      <hr />
      <main className={styles.lowerContent}>
        <section>
          <div>
            Copyright ©2023 All rights reserved | This template is made with by
            Colorlib
          </div>
        </section>
        <section  className={styles.socialMedia}>
          <FaFacebook className={styles.facebook}/>
          <FaTwitter className={styles.twitter}/>
          <FaLinkedin className={styles.linkedIn}/>
          <FaInstagram className={styles.instagram}/>
        </section>
      </main>
    </main>
  );
};

export default Footer;
