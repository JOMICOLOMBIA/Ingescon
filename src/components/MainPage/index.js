import { ContactForm } from "../EmailForm";
import styles from "./Index.module.css";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Image from "next/image";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";


import { Navbar } from "../Layout/Navbar";

// const backgroundImageStyle = {
//   backgroundImage: `url(${backgroundImage.src})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   height: "100vh"
// }



export const MainPage = () => {

  const screenUpper576 = useMediaQuery("(min-width:576px)");

  return (
    <>
      <Navbar />
      <Box id="homeSection" className={styles.bsection}>
        <Image
          src={screenUpper576 ? "/assets/Enmascarar_grupo_7.jpg" : "/assets/Enmascarar_grupo_73.jpg"} // Ruta relativa a la imagen dentro de la carpeta public
          alt="Mujer sonriendo"
          width={100} // Ancho de la imagen en píxeles
          height={100} // Alto de la imagen en píxeles
          layout="responsive"
          className={styles.image}
        />
        <div className={styles.flexHomeSection}>
          <h1 className={styles.flexHomeSectionTitle}>
            La sonrisa soñada es posible
          </h1>
          <div>
            <Typography className={styles.flexHomeSectionText}>
              Te ayudamos a mejorar la calidad de vida, aumentando tu confianza,
              salud y bienestar.
            </Typography>
          </div>
          <div className={styles.flexButtonHS}>
            <Button className={styles.buttonHomeSection} size={screenUpper576 ? "large" : "small"}>
              {" "}
              Agenda tu cita{" "}
            </Button>
          </div>
        </div>
      </Box>
      <div id="procSection" className={styles.bsection}>
        {/* <Image
          src="/assets/our_porocedures.PNG" // Ruta relativa a la imagen dentro de la carpeta public
          alt="Ejemplo"
          width={100} // Ancho de la imagen en píxeles
          height={100} // Alto de la imagen en píxeles
          layout="responsive"
          className={styles.image}
        /> */}
        <div className={styles.flexProcSection}>
          <h1 className={styles.flexHomeSectionTitle}>
            Nuestros procedimientos
          </h1>
          <div className={styles.cardProcSection}>
            <Image
              src="/assets/Diente-dorado.svg"
              alt="Diente dorado"
              width={80}
              height={80}
            />
            <div className={styles.boxCardProcSection}>
              <h2 className={styles.headerCardProcSection}>
                Diseño en cerámica
              </h2>
              <Typography className={styles.textCardProcSection}>
                Hechos con la más alta calidad en nuestro laboratorio,
                cuentan con tiempo de duración de más de 10 años.
              </Typography>
            </div>
          </div>
        </div>

      </div>
      <div id="auSection" className={styles.bsection}>

      </div>
      <div id="casesSection" className={styles.bsectionCases}>
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
      <div className={styles.bsection}>
        <ContactForm />
      </div>
      <div className={styles.footer}>
        <Image
          src="/assets/footer.jpg"
          alt="Rectángulo negro con logo"
          fill={true}
          className={styles.imageFooter}
        />
      </div>



    </>
  );
};
