import React from "react";
import styles from "./styles.module.scss";


const Card=(props:any)=>{
    const {image,altText,heading,description}=props;
    return(
        <>
        <main className={styles.mainContainer}>
            <div>
                <img src={image.src} alt={altText} />
            </div>
            <p className={styles.heading}>
                {heading}
            </p>
            <div className={styles.description}>{description}</div>
        </main>
        </>
    )
}

export default Card;