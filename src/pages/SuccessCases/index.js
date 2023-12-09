import Image from "next/image";
import styles from "./index.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PhotoSliderSection } from "@/components/PhotoCarrusel";
import { Navbar } from "@/components/Layout/Navbar";
import { Typography, useMediaQuery } from "@mui/material";
import { Footer } from "@/components/Layout/Footer";
import { BotonFlotante } from "@/components/Layout/BotonFlotante";

const images = [["/assets/cera-1.jpeg", "/assets/cera-2.jpeg", "/assets/cera-3.jpeg", "/assets/cera-4.jpeg", "/assets/cera-5.jpeg" ], ["/assets/resi-1.jpeg", "/assets/resi-2.jpeg", "/assets/resi-3.jpeg", "/assets/resi-4.jpeg", "/assets/resi-5.jpeg"]];

const componentesCartas = [
  {
    title: "Diseño en cerámica",
    description:
      "Hechos con la más alta calidad en nuestro laboratorio, cuentan con tiempo de duración de más de 10 años.",
  },
  {
    title: "Diseño en resina",
    description:
      "Tendrás una sonrisa perfecta en una sola sesión, nuestra resina es de alta calidad y tiene una durabilidad de 3 a 5 años.",
  },
];

const contenidoCartas = [
  [
    {
      title: "Durabilidad",
      content: "10 a 15 años"
    },
    {
      title: "Tiempo de tratamiento",
      content: "2 sesiones"
    },
    {
      title: "Procedimiento",
      content: "Limpieza dental, sin desgaste y sin dolor."
    }
  ],
  [
    {
      title: "Durabilidad",
      content: "3 a 5 años"
    },
    {
      title: "Tiempo de tratamiento",
      content: "1 sesión"
    },
    {
      title: "Procedimiento",
      content: "Limpieza dental, sin desgaste y sin dolor."
    }
  ],
]

const SuccessCases = () => {

  const screenUpper576 = useMediaQuery("max-width: 576px");
  return (
    <>
      <Navbar />
      <div className={styles.flexProcSection}>
        <h1 className={styles.flexHomeSectionTitle}>Casos de éxito</h1>
        <div className={styles.flexPhotoSlider}>
          <PhotoSliderSection
            images={images[0]}
            componentesCartas={componentesCartas[0]}
            contenidoCartas={contenidoCartas[0]}
          />
          <PhotoSliderSection
            images={images[1]}
            componentesCartas={componentesCartas[1]}
            contenidoCartas={contenidoCartas[1]}
          />
        </div>
        <div>
          <div className={styles.cardProcSection}>
            <Image
              src={"/assets/ico-personas.svg"}
              alt={"icono"}
              width={screenUpper576 ? 40 : 80 }
              height={screenUpper576 ? 40 : 80}
            />
            <div className={styles.boxCardProcSection}>
              <h2 className={styles.headerCardProcSection}>
                Recomendaciones
              </h2>
              <Typography className={styles.textCardProcSection}>
                Se recomienda la realización de una limpieza dental profunda previa al inicio del diseño de sonrisa. Finalizado
                el tratamiento se recomienda la fabricación de una placa protectora para el cuidado de las carillas, evitando
                así su fractura.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <BotonFlotante></BotonFlotante>
      <Footer/>
    </>
  );
};

export default SuccessCases;
