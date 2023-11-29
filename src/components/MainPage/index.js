import { ContactForm } from "../EmailForm";
import styles from "./Index.module.css";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Image from "next/image";
import { NavBarOptions } from "../NavBarOptions";
import { Navbar } from "../Layout/Navbar";

export const MainPage = () => {
  return (
    <>
      <Navbar />
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
