import { ImgComparisonSlider } from "@img-comparison-slider/react";
import styles from "./index.module.css"
import { Button } from "@mui/material";


export const CasesSliders = () => {
    return (
        <div className={styles.bslider}>
            <h1 className={styles.flexCasesSectionTitle}>Antes y después</h1>
            <div className={styles.flexCasesSection}>
                <div className={styles.gridItem}>
                    <ImgComparisonSlider className={styles.containerSlider}> 
                        <div slot="first" className={styles.box1}></div>
                        <div slot="second" className={styles.box2}></div>
                    </ImgComparisonSlider>
                </div>
                <div className={styles.gridItem}>
                    <ImgComparisonSlider className={styles.containerSlider}>
                        <div slot="first" className={styles.box1}></div>
                        <div slot="second" className={styles.box2}></div>
                    </ImgComparisonSlider>
                </div>
                <div className={styles.gridItem}>
                    <ImgComparisonSlider className={styles.containerSlider}>
                        <div slot="first" className={styles.box1}></div>
                        <div slot="second" className={styles.box2}></div>
                    </ImgComparisonSlider>
                </div>
                <div className={styles.gridItem}>
                    <ImgComparisonSlider className={styles.containerSlider}>
                        <div slot="first" className={styles.box1}></div>
                        <div slot="second" className={styles.box2}></div>
                    </ImgComparisonSlider>
                </div>
            </div>
            <Button size="large">
                {" "}
                Ver todos los casos{" "}
            </Button>
        </div>
    );
}