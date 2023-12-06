import { ImgComparisonSlider } from "@img-comparison-slider/react";
import styles from "./index.module.css";
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export const CasesSliders = ({
  background = "back",
  buttonredirect = true,
  title = true,
}) => {
  const router = useRouter();
  const handleVerTodosLosCasos = () => {
    // Redirige al usuario a la página /successCases
    router.push("/SuccessCases/");
  };
  return (
    <div className={styles.bslider} style={{ background: background }}>
      {title && (
        <h1 className={styles.flexCasesSectionTitle}>Antes y después</h1>
      )}
      <div className={styles.flexCasesSection}>
        <div className={styles.gridItem}>
          <ImgComparisonSlider className={styles.containerSlider}>
            <div slot="first" className={styles.box}>
              <Image
                src="/assets/12.png"
                fill={true}
                className={styles.image}
                alt="Caso 12 antes"
              />
            </div>
            <div slot="second" className={styles.box}>
              <Image
                src="/assets/12-12.png"
                fill={true}
                className={styles.image}
                alt="Caso 12 después"
              />
            </div>
          </ImgComparisonSlider>
        </div>
        <div className={styles.gridItem}>
          <ImgComparisonSlider className={styles.containerSlider}>
            <div slot="first" className={styles.box}>
              <Image
                src="/assets/11.png"
                fill={true}
                className={styles.image}
                alt="Caso 12 antes"
              />
            </div>
            <div slot="second" className={styles.box}>
              <Image
                src="/assets/11-11.png"
                fill={true}
                className={styles.image}
                alt="Caso 12 después"
              />
            </div>
          </ImgComparisonSlider>
        </div>
        <div className={styles.gridItem}>
          <ImgComparisonSlider className={styles.containerSlider}>
            <div slot="first" className={styles.box}>
              <Image
                src="/assets/8.png"
                fill={true}
                className={styles.image}
                alt="Caso 12 antes"
              />
            </div>
            <div slot="second" className={styles.box}>
              <Image
                src="/assets/8-8.png"
                fill={true}
                className={styles.image}
                alt="Caso 12 después"
              />
            </div>
          </ImgComparisonSlider>
        </div>
        <div className={styles.gridItem}>
          <ImgComparisonSlider className={styles.containerSlider}>
            <div slot="first" className={styles.box}>
              <Image
                src="/assets/6.png"
                fill={true}
                className={styles.image}
                alt="Caso 12 antes"
              />
            </div>
            <div slot="second" className={styles.box}>
              <Image
                src="/assets/6-6.png"
                fill={true}
                className={styles.image}
                alt="Caso 12 después"
              />
            </div>
          </ImgComparisonSlider>
        </div>
      </div>
      {buttonredirect && (
        <Button
          size="large"
          className={styles.buttonCases}
          onClick={handleVerTodosLosCasos}
        >
          {" "}
          Ver todos los casos{" "}
        </Button>
      )}
    </div>
  );
};
