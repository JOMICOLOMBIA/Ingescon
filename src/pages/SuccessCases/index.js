import Image from "next/image";
import styles from "./index.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PhotoSliderSection } from "@/components/PhotoCarrusel";
import { Navbar } from "@/components/Layout/Navbar";

const images = [[ "/assets/12.png", "/assets/12-12.png", "/assets/11.png"], [ "/assets/12.png", "/assets/12-12.png", "/assets/11.png"]];

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
  return (
    <>
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
      </div>
    </>
  );
};

export default SuccessCases;
