import Image from "next/image";
import styles from "./index.module.css";
import { ContentFlexProyectos } from "../ContentFlexProyectos";




export const FlexProyectos = () => {


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
      title: "En proceso",
      description: "Patología, vulnerabilidad y reforzamiento del Edificio de control administrativo CCO Morrison",
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
            <ContentFlexProyectos key={key} proyect={proyect}/>
          )
        })
        }
      </div>
    </div>
  );
};
