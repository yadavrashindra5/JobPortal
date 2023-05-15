import React from "react";
import styles from "./styles.module.scss";
import { dataDescription } from "../../utils/data";
import JobDescriptionCard from "../JobDescriptionCard";

const JobFeatures=()=>{
    return(
        <>
        <main className={styles.mainContainer}>
            <div className={styles.recentJob}>Recent Job</div>
            <div className={styles.featuresJob}>Features Job</div>
            {
                dataDescription.map((data)=> <JobDescriptionCard />)
            }
        </main>
        </>
    )
}

export default JobFeatures;