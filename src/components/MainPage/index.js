import { ContactForm } from "../EmailForm";
import styles from "./Index.module.css";

import Image from "next/image";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";


import { Navbar } from "../Layout/Navbar";
import { CardProcGrid } from "../Layout/CardProcGrid";
import { CardAboutUsFlex } from "../Layout/CardAboutUsFlex";
import { CasesSliders } from "../Layout/CasesSliders";


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
        <CardProcGrid />
      </div>
      <div id="auSection" className={styles.bsectionCases}>
        <CardAboutUsFlex />
      </div>
      <div id="casesSection" className={styles.bsection}>
        <CasesSliders />
      </div>
      <div className={styles.bsection}>
        <Image
          src={screenUpper576 ? "/assets/Enmascarar_grupo_10.jpg" : "/assets/Enmascarar_grupo_15.jpg"} // Ruta relativa a la imagen dentro de la carpeta public
          alt="Mujer sonriendo"
          width={100} // Ancho de la imagen en píxeles
          height={100} // Alto de la imagen en píxeles
          layout="responsive"
          className={styles.image}
        />
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
