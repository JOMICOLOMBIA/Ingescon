import { useState } from "react";
import { Button, Typography, useMediaQuery } from "@mui/material";
import styles from "./NavBarOptions.module.css";
import Image from "next/image";

export const NavBarOptions = ({
  isSideBar = false,
  onMenuItemClick = () => { },
}) => {
  const screenUpper933 = useMediaQuery("(min-width:933px)");
  const [elementClasses, setElementClasses] = useState({
    home: { box: styles.boptionsNotClicked, text: styles.textNotClicked },
    expertos: { box: styles.boptionsNotClicked, text: styles.textNotClicked },
    nuestrosServicios: { box: styles.boptionsNotClicked, text: styles.textNotClicked },
    proy: { box: styles.boptionsNotClicked, text: styles.textNotClicked },
    trayectoria: { box: styles.boptionsNotClicked, text: styles.textNotClicked },
  });

  const goToContact = () => {
    const target = document.getElementById("contactSection2");

    const targetOffset = target.offsetTop;
    onMenuItemClick(false);
    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  };

  const goToSection = (section, e) => {
    const updatedElementClasses = { ...elementClasses };


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

    const target = document.getElementById(e);
    const navbar = document.getElementById("navbar");
    onMenuItemClick(false);
    if (target && navbar) {
      const targetOffset = target.offsetTop;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }
    console.log(target)
  };

  return (
    <div
      className={styles.foptions}
      style={{
        flexDirection: isSideBar ? "column" : "row",
      }}
    >
      {isSideBar && (
        <a
        href="/#homeSection"
        onClick={(e) => goToSection("home", e)}
        >
          <Image
            src="/assets/logowhite.png"
            alt="Logo SDC"
            height={50}
            width={145}
            className={styles.logonavbar}
          />
        </a>
      )}
      <div className={elementClasses.expertos.box}>
        <a
          href="/#somosExpertos"
          onClick={(e) => goToSection("expertos", e)}
          className={styles.linknb}
        >
          <Typography className={elementClasses.expertos.text}>
            {" "}
            Somos Expertos{" "}
          </Typography>
        </a>
      </div>
      <div className={elementClasses.nuestrosServicios.box}>
        <a
          href="/#serviciosSection"
          onClick={(e) => goToSection("nuestrosServicios", e)}
          className={styles.linknb}
        >
          <Typography className={elementClasses.nuestrosServicios.text}>
            {" "}
            Nuestros Servicios{" "}
          </Typography>
        </a>
      </div>
      <div className={elementClasses.proy.box}>
        <a
          href="/#proySection"
          onClick={(e) => goToSection("proy", e)}
          className={styles.linknb}
        >
          <Typography className={elementClasses.proy.text}>
            {" "}
            Proyectos destacados{" "}
          </Typography>
        </a>
      </div>
      <div className={elementClasses.trayectoria.box}>
        <a
          href="/#trayectoriaSection"
          onClick={(e) => goToSection("trayectoria", e)}
          className={styles.linknb}
        >
          <Typography className={elementClasses.trayectoria.text}>
            {" "}
            Nuestra Trayectoria{" "}
          </Typography>
        </a>
      </div>
      <Button size={screenUpper933 ? "medium" : "small"} onClick={goToContact} className={styles.buttonNv}>
        {" "}
        Contacto{" "}
      </Button>
    </div>
  );
};
