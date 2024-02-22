// components/FlexHomeSection.js
import { Button, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";


import styles from "./index.module.css";


export const FlexHomeSection = ({pic, desc}) => {


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
          {desc}
        </Typography>
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
