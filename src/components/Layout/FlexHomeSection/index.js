// components/FlexHomeSection.js
import { Button, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";


import styles from "./index.module.css";

const infoComponent = [["Ofrecemos servicios de diagnóstico estructural con pruebas especializadas:", " Realizamos el análisis detallado de estructuras para identificar causas como sobrecargas, fallos de materiales o errores de diseño/construcción."], ["Realizamos el seguimiento técnico de la ejecución de contratos, principalmente con entidades estatales.", " La interventoría permite llevar el control y vigilancia de un proyecto para hacerlo más eficiente."]];


export const FlexHomeSection = ({ pic }) => {


  const arrayIndex = pic - 2;


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

  if (pic === 1) {
    return (
      <div className={styles.boxHomeSection}>
        
        <div className={styles.flexHomeSection}>
        <div className={styles.boxImageFlex}>
          <Image
            src={`/assets/home-logo-${pic}.webp`} // Ruta relativa a la imagen dentro de la carpeta public
            alt="Logo inges"
            fill={true}
            className={styles.image}
            sizes="(max-width: 728px) 80vw, (max-width: 2000px) 100vw"
            priority={true}
          />
        </div>
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
  }
  return (
    <div className={styles.boxHomeSection}>
      <div className={styles.boxImageFlex}>
        <Image
          src={`/assets/home-logo-${pic}.png`} // Ruta relativa a la imagen dentro de la carpeta public
          alt="Foto obra"
          fill={true}
          className={styles.image}
          sizes="(max-width: 728px) 80vw, (max-width: 2000px) 100vw"
          priority={true}
        />
      </div>
      <div className={styles.flexHomeSection}>
        <Typography className={styles.flexHomeSectionTitle}>
          <strong className={styles.semiBoldText}>{infoComponent[arrayIndex][0]}</strong>{infoComponent[arrayIndex][1]}
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
 
};
