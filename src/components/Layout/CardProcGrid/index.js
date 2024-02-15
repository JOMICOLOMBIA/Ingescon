import Image from "next/image";
import { Button, Typography } from "@mui/material";
import styles from "./index.module.css";

export const CardProcGrid = () => {

  const goToCases = () => {
    const target = document.getElementById("casesSection");
    const navbar = document.getElementById("navbar").offsetHeight;

    const targetOffset = target.offsetTop - navbar;

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  };

  const procedureComponents = [
    {
      title: "Diseño en cerámica",
      description: "Hechos con la más alta calidad en nuestro laboratorio, cuentan con tiempo de duración de más de 10 años.",
      icon: "diente-dorado",
    },
    {
      title: "Diseño en resina",
      description: "Tendrás una sonrisa perfecta en una sola sesión, nuestra resina es de alta calidad y tiene una durabilidad de 3 a 5 años.",
      icon: "diente-dorado",
    },
    {
      title: "Limpieza dental",
      description: "Te brindaremos una limpieza profunda y precisa que eliminará la placa, el sarro y las manchas, dejando tus dientes limpios y relucientes",
      icon: "herramientas",
    },
    {
      title: "Blanqueamiento dental",
      description: "Sabemos lo importante que es para ti tener unos dientes más blancos y brillantes, y estamos aquí para hacerlo realidad.",
      icon: "cepillo",
    },
  ];

  return (
    <div className={styles.flexProcSection}>
      <h1 className={styles.flexHomeSectionTitle}>Nuestros procedimientos</h1>
      <div className={styles.gridCardsProc}>
        {procedureComponents.map((component, key) => (
          <div className={styles.gridItem} key={key}>
            <div className={styles.cardProcSection}>
              <div className={styles.cardProcImage}>
                <Image
                  src={`/assets/ico-${component.icon}.svg`}
                  alt="Icono"
                  width={80}
                  height={80}
                />
              </div>
              <div className={styles.boxCardProcSection}>
                <h2 className={styles.headerCardProcSection}>
                  {component.title}
                </h2>
                <Typography className={styles.textCardProcSection}>
                  {component.description}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button size="large" className={styles.button} onClick={goToCases}>
      Conoce más
      </Button>
    </div>
  );
};
