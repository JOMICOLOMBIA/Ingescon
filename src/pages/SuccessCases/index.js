import Image from "next/image";
import { Button, Typography } from "@mui/material";
import styles from "./index.module.css";
import { CasesSliders } from "@/components/Layout/CasesSliders";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { PhotoSliderSection } from "@/components/PhotoCarrusel";

const images = ["/assets/12.png", "/assets/12-12.png", "/assets/11.png"];
const componentesCartas = [
  {
    title: "Diseño en cerámica",
    description:
      "Hechos con la más alta calidad en nuestro laboratorio, cuentan con tiempo de duración de más de 10 años.",
    icon: "diente-dorado",
  },
];

const SuccessCases = () => {
  return (
    <div className={styles.flexProcSection}>
      <h1 className={styles.flexHomeSectionTitle}>Casos de éxito</h1>
      <CasesSliders
        background="transparent"
        buttonredirect={false}
        title={false}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "150px" }}>
        <PhotoSliderSection
          images={images}
          componentesCartas={componentesCartas}
        />
        <PhotoSliderSection
          images={images}
          componentesCartas={componentesCartas}
        />
      </div>
      <div className={styles.gridCardsProc}>
        {componentesCartas.map((componente, key) => {
          return (
            <div className={styles.gridItem} key={key}>
              <div className={styles.cardProcSection}>
                <Image
                  src={`/assets/ico-${componente.icon}.svg`}
                  alt="Icono"
                  width={80}
                  height={80}
                />
                <div className={styles.boxCardProcSection}>
                  <h2 className={styles.headerCardProcSection}>
                    {componente.title}
                  </h2>
                  <Typography className={styles.textCardProcSection}>
                    {componente.description}
                  </Typography>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Button size="large"> Conoce más </Button>
    </div>
  );
};

export default SuccessCases;
