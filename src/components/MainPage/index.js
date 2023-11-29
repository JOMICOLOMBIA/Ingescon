import { ContactForm } from "../EmailForm";
import styles from "./Index.module.css";
import { Typography } from "@mui/material";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Image from "next/image";

export const MainPage = () => {
  const goToSection = (href) => {
    const target = document.getElementById(href);
    if (target) {
      const targetOffset = target.offsetTop;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.blogo}>
          <Typography>Hola.</Typography>
        </div>
        <div className={styles.foptions}>
          <div className={styles.boptions}>
            <a color={"white"} href="#homeSection" onClick={goToSection}>
              Inicio
            </a>
          </div>
          <div className={styles.boptions}>
            <a color={"white"} href="#procSection" onClick={goToSection}>
              Procedimientos
            </a>
          </div>
          <div className={styles.boptions}>
            <a color={"white"} href="#auSection" onClick={goToSection}>
              Acerca de nosotros
            </a>
          </div>
          <div className={styles.boptions}>
            <a color={"white"} href="#casesSection" onClick={goToSection}>
              Casos de éxito
            </a>
          </div>
        </div>
      </div>
      <div id="homeSection" className={styles.bsection}>
        <Image
          src="/assets/Enmascarar_grupo_7.jpg" // Ruta relativa a la imagen dentro de la carpeta public
          alt="Ejemplo"
          width={100} // Ancho de la imagen en píxeles
          height={100} // Alto de la imagen en píxeles
          layout="responsive"
          className={styles.image}
        />
      </div>
      <div id="procSection" className={styles.bsection}></div>
      <div id="auSection" className={styles.bsection}></div>
      <div id="casesSection" className={styles.ausection}>
        <div className={styles.bslider}>
          <ImgComparisonSlider>
            <div slot="first" className={styles.box1}></div>
            <div slot="second" className={styles.box2}></div>
          </ImgComparisonSlider>
          <ImgComparisonSlider>
            <div slot="first" className={styles.box1}></div>
            <div slot="second" className={styles.box2}></div>
          </ImgComparisonSlider>
          <ImgComparisonSlider>
            <div slot="first" className={styles.box1}></div>
            <div slot="second" className={styles.box2}></div>
          </ImgComparisonSlider>
        </div>
      </div>
      <ContactForm />
    </>
  );
};
