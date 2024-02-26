// components/FlexHomeSection.js
import { Button, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";


import styles from "./index.module.css";


export const FlexHomeSection = ({ pic }) => {


  const screenUpper933 = useMediaQuery("(min-width:933px)");

  const goToContact = () => {
    const target = document.getElementById("contactSection");
    const navbar = document.getElementById("navbar").offsetHeight;

    const targetOffset = target.offsetTop - navbar;

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  };

  switch (pic) {
    case 1:
      return (
        <div className={styles.boxHomeSection}>
          <div className={styles.boxImageFlex}>
            <Image
              src={`/assets/home-logo-${pic}.png`} // Ruta relativa a la imagen dentro de la carpeta public
              alt="Logo inges"
              fill={true}
              className={styles.image}
            />
          </div>
          <div className={styles.flexHomeSection}>
            <Typography className={styles.flexHomeSectionTitle}>
              <strong className={styles.boldText}>Descubre el corazón de toda obra civil:</strong><br></br> Especificaciones diseñadas para garantizar<br></br> durabilidad y seguridad.
            </Typography>
            <div className={styles.flexButtonHS}>
              <Button
                className={styles.buttonHomeSection}
                size={screenUpper933 ? "large" : "medium"}
                onClick={goToContact}
              >
                {" "}
                Contáctanos{" "}
              </Button>
              <Button
                className={styles.buttonHomeSection}
                size={screenUpper933 ? "large" : "medium"}
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
    case 2:
      return (
        <div className={styles.boxHomeSection}>
          <div className={styles.boxImageFlex}>
            <Image
              src={`/assets/home-logo-${pic}.png`} // Ruta relativa a la imagen dentro de la carpeta public
              alt="Foto obra"
              fill={true}
              className={styles.image}
            />
          </div>
          <div className={styles.flexHomeSection}>
            <Typography className={styles.flexHomeSectionTitle}>
              <strong className={styles.semiBoldText}>Ofrecemos servicios de diagnóstico estructural con pruebas especializadas:</strong> Realizamos el análisis detallado de estructuras para identificar causas como sobrecargas, fallos de materiales o errores de diseño/construcción.
            </Typography>
            <div className={styles.flexButtonHS}>
              <Button
                size={screenUpper933 ? "large" : "medium"}
                onClick={goToContact}
              >
                {" "}
                Contáctanos{" "}
              </Button>
              <Button
                size={screenUpper933 ? "large" : "medium"}
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
    case 3:
      return (
        <div className={styles.boxHomeSection}>
          <div className={styles.boxImageFlex}>
            <Image
              src={`/assets/home-logo-${pic}.png`} // Ruta relativa a la imagen dentro de la carpeta public
              alt="Foto obra"
              fill={true}
              className={styles.image}
            />
          </div>
          <div className={styles.flexHomeSection}>
            <Typography className={styles.flexHomeSectionTitle}>
              <strong className={styles.semiBoldText}>Realizamos el seguimiento técnico de la ejecución de contratos, principalmente con entidades estatal.</strong> La interventoría permite llevar el control y vigilancia de un proyecto para hacerlo más eficiente.
            </Typography>
            <div className={styles.flexButtonHS}>
              <Button
                className={styles.buttonHomeSection}
                size={screenUpper933 ? "large" : "medium"}
                onClick={goToContact}
              >
                {" "}
                Contáctanos{" "}
              </Button>
              <Button
                className={styles.buttonHomeSection}
                size={screenUpper933 ? "large" : "medium"}
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
  }

};
