import { useEffect, useState } from "react";
import { Button, Typography, useMediaQuery } from "@mui/material";
import styles from "./NavBarOptions.module.css";
import { useTranslation } from "react-i18next";

export const NavBarOptions = ({ changeLng, i18n, t }) => {
  const screenUpper576 = useMediaQuery("(min-width:576px)");
  const [elementClasses, setElementClasses] = useState({
    home: { box: styles.boptionsNotClicked, text: styles.textNotClicked },
    proc: { box: styles.boptionsNotClicked, text: styles.textNotClicked },
    aboutUs: { box: styles.boptionsNotClicked, text: styles.textNotClicked },
    cases: { box: styles.boptionsNotClicked, text: styles.textNotClicked },
  });

  const goToContact = () => {
    const target = document.getElementById("contactSection");

    const targetOffset = target.offsetTop;

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  };

  const goToSection = (section, e) => {
    const updatedElementClasses = { ...elementClasses };

    if (section) {
      updatedElementClasses[section].box = styles.boptionsClicked;
      updatedElementClasses[section].text = styles.textClicked;

      Object.keys(elementClasses).forEach((otherIdentifier) => {
        if (otherIdentifier !== section) {
          updatedElementClasses[otherIdentifier].box =
            styles.boptionsNotClicked;
          updatedElementClasses[otherIdentifier].text = styles.textNotClicked;
        }
      });
      setElementClasses(updatedElementClasses);
    }
    const target = document.getElementById(e);
    const navbar = document.getElementById("navbar");

    if (target && navbar) {
      const targetOffset = target.offsetTop;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.foptions}>
      <div className={elementClasses.home.box}>
        <a
          href="#homeSection"
          onClick={(e) => goToSection("home", e)}
          className={styles.linknb}
        >
          <Typography className={elementClasses.home.text}>
            {t("home")}{" "}
          </Typography>
        </a>
      </div>
      <div className={elementClasses.proc.box}>
        <a
          href="#procSection"
          onClick={(e) => goToSection("proc", e)}
          className={styles.linknb}
        >
          <Typography className={elementClasses.proc.text}>
            {" "}
            {t("procedures")}{" "}
          </Typography>
        </a>
      </div>
      <div className={elementClasses.aboutUs.box}>
        <a
          href="#auSection"
          onClick={(e) => goToSection("aboutUs", e)}
          className={styles.linknb}
        >
          <Typography className={elementClasses.aboutUs.text}>
            {" "}
            {t("aboutUs2")}{" "}
          </Typography>
        </a>
      </div>
      <div className={elementClasses.cases.box}>
        <a
          href="#casesSection"
          onClick={(e) => goToSection("cases", e)}
          className={styles.linknb}
        >
          <Typography className={elementClasses.cases.text}>
            {" "}
            {t("successCases")}{" "}
          </Typography>
        </a>
      </div>
      <Button size={screenUpper576 ? "medium" : "small"} onClick={goToContact}>
        {" "}
         {t("Contacto")}{" "}
      </Button>
      <div
        style={{
          color: "white",
          margin: "auto 10px",
          fontSize: "16px",
        }}
        onClick={() => {
          changeLng();
        }}
      >
        {i18n?.language?.toUpperCase()}
      </div>
    </div>
  );
};
