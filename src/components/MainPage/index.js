import { ContactForm } from "../EmailForm";
import styles from "./Index.module.css";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";


import { Navbar } from "../Layout/Navbar";


// const backgroundImageStyle = {
//   backgroundImage: `url(${backgroundImage.src})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   height: "100vh"
// }



export const MainPage = () => {
  return (
    <>
      <Navbar />
      <Box id="homeSection" className={styles.bsection}>
        <Image
          src="/assets/Enmascarar_grupo_7.jpg" // Ruta relativa a la imagen dentro de la carpeta public
          alt="Ejemplo"
          width={100} // Ancho de la imagen en píxeles
          height={100} // Alto de la imagen en píxeles
          layout="responsive"

          className={styles.image}
        />
        <div className={styles.flexHomeSection}>
          <h1>La sonrisa soñada es posible</h1>
          <div>
            <Typography>Te ayudamos a mejorar la calidad de vida, aumentando tu
              confianza, salud y bienestar.</Typography>
          </div>
          <div className={styles.flexButtonHS}> 
            <Button className={styles.buttonHomeSection} size="large"> Agenda tu cita </Button>
          </div>
        </div>
      </Box>
      {/* styles={{backgroundImage: "url(/public/assets/Enmascarar_grupo_7.jpg)"}} */}
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
