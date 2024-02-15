// components/FlexHomeSection.js
import { Button, Typography, useMediaQuery } from "@mui/material";


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
    <div className={styles.flexHomeSection}>
      <h1 className={styles.flexHomeSectionTitle}>
      La sonrisa soñada es posible
      </h1>
      <div>
        <Typography className={styles.flexHomeSectionText}>
        Te ayudamos a mejorar la calidad de vida, aumentando tu confianza, salud y bienestar.
        </Typography>
      </div>
      <div className={styles.flexButtonHS}>
        <Button
          className={styles.buttonHomeSection}
          size={screenUpper576 ? "large" : "medium"}
          onClick={goToContact}
        >
          {" "}
          Agenda tu cita{" "}
        </Button>
      </div>
    </div>
  );
};
