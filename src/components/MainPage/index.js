import { ContactForm } from "../EmailForm";
import styles from "./Index.module.css";

import Image from "next/image";

import { FlexProyectos } from "../Layout/FlexProyectos";
import { Navbar } from "@/components/Layout/Navbar";
import YellowBar from "../Layout/YellowBarHome";
import { NuestrosServicios } from "../Layout/NuestrosServicios";
import { CarouselHome } from "../CarouselHome";



export const MainPage = () => {

  return (
    <>
      <Navbar />
      <CarouselHome/>
      <YellowBar />
      <div id="contactSection" className={styles.bsectionContact}>
      <Image
            src={"/assets/FONDO_DE_NECESITAS_ASESORIA.png"}
            alt="Fondo section"
            layout="fill"
            objectFit="cover"
            fill={true}
            quality={100} // Ajusta la calidad de la imagen
            loading="eager" // Carga la imagen de forma prioritaria
          />
        <ContactForm title={"Cuéntanos tu idea"} LeftComponent={() => {
          return(
            <h2 style={{display:"flex", backgroundColor:"red", width:"30vw", color:"white", fontSize:34, fontWeith:"bold", fontFamily:"Exo", width:"380px", margin:"auto 5vw" }}>
              ¿Necesitas asesoría para tu proyecto
            </h2>
          )
        }} cardView={true} />
      </div>
      <div id="casesSection" className={styles.bsection}>
        <NuestrosServicios />
      </div>
      <div id="procSection" className={styles.bsectionCases}>
        <FlexProyectos />
      </div>

      <div id="auSection" className={styles.bsectionCases2}>
        <Image
          src={"/assets/fondo-au.jpg"}
          alt="Fondo section"
          fill={true}
          className={styles.fondoAboutUs}
        />
      </div>
      <div id="casesSection" className={styles.bsection}>
      </div>
      <div id="contactSection" className={styles.bsectionContact}>
        <ContactForm />
      </div>
    </>
  );
};
