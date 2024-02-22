// components/FlexHomeSection.js
import { Button, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";


import styles from "./index.module.css";
import { Suspense, useEffect } from "react";

export const FlexHomeSection = () => {


  const screenUpper576 = useMediaQuery("(min-width:576px)");

  const goToContact = () => {
    const target = document.getElementById("contactSection");
    const navbar = document.getElementById("navbar").offsetHeight;

    const targetOffset = target.offsetTop - navbar;

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.boxHomeSection}>
      <Image
        src="/assets/home-logo.png" // Ruta relativa a la imagen dentro de la carpeta public
        alt="Foto obra"
        width={520} // Ancho de la imagen en píxeles
        height={280} // Alto de la imagen en píxeles
        className={styles.image}
      />
      <div className={styles.flexHomeSection}>
        <Typography className={styles.flexHomeSectionTitle}>
          Descubre el corazón de toda obra civil:
        </Typography>
        <div>
          <Typography className={styles.flexHomeSectionText}>
            Especificaciones diseñadas para garantizar durabilidad y seguridad
          </Typography>
        </div>
        <div className={styles.flexButtonHS}>
          <Button
            className={styles.buttonHomeSection}
            size={"large"}
            onClick={goToContact}
          >
            {" "}
            Contáctanos{" "}
          </Button>
          <Button
            className={styles.buttonHomeSection}
            size={"large"}
            onClick={goToContact}
            variant="outlined"
          >
            {" "}
            Nuestros Servicios{" "}
          </Button>
        </div>
      </div>
      </div>
  );
};
