import Image from "next/image";
import { Button, Typography } from "@mui/material";
import styles from "./index.module.css";

export const FlexProyectos = () => {

  const goToCases = () => {
    const target = document.getElementById("casesSection");
    const navbar = document.getElementById("navbar").offsetHeight;

    const targetOffset = target.offsetTop - navbar;

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  };

  const proyectComponents = [
    {
      title: "Intersección Sena",
      description: "Puente en concreto postensado Sena 3 luces",
      image: 1,
    },
    {
      title: "Puente intersección Nogales",
      description: "Puente curvo en viga cajon metálica longitud 260 m",
      image: 2,
    },
    {
      title: "Puente intersección Nogales",
      description: "Puente curvo en viga cajon metálica longitud 260 m",
      image: 3,
    },
    {
      title: "Peaje La Gómez",
      description: "Troncal Magdalena 2",
      image: 4,
    },
  ];

  return (
    <div className={styles.flexProcSection}>
      <p className={styles.flexHomeSectionTitle}>Proyectos Destacados</p>
      <div className={styles.boxImage}>
        <Image
          src="/assets/yellow-bar.png"
          alt="Yellow bar"
          fill={true}
        />
      </div>
      <div className={styles.flexProyectos}>
        {proyectComponents.map((proyect, key) => {
          return (
            <div className={styles.boxHoverEffect} key={key}>
              <div className={styles.bottomBox}>
                <Image
                  // src="/assets/proyect-1.png"
                  src={`/assets/proyect-${proyect.image}.png`}
                  alt="Foto proyecto"
                  fill={true}
                  className={styles.imageProject}
                />
              </div>
              <div className={styles.topBox}>
              <Image
                  // src="/assets/proyect-1.png"
                  src={"/assets/hover-view.png"}
                  alt="cuadro negro con alfa baja"
                  fill={true}
                  className={styles.imageHover}
                />
                <h3 className={styles.titleCardProyect}>{proyect.title}</h3>
                <Typography className={styles.textCardProyect}>
                  {proyect.description}
                </Typography>
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  );
};
