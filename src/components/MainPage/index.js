import { ContactForm } from "../EmailForm";
import styles from "./Index.module.css";

import Image from "next/image";

import { FlexProyectos } from "../Layout/FlexProyectos";
import { Navbar } from "@/components/Layout/Navbar";
import YellowBar from "../Layout/YellowBarHome";
import { NuestrosServicios } from "../Layout/NuestrosServicios";
import { CarouselHome } from "../CarouselHome";
import { WeAreExperts } from "../Layout/WeAreExperts";
import { NuestraTrayectoria } from "../NuestraTrayectoria";



export const MainPage = () => {

  return (
    <>
      <Navbar />
      <CarouselHome/>
      <YellowBar />

      <WeAreExperts />
      <div id="contactSection" className={styles.bsectionContact}>
        <div >  <Image
            src={"/assets/FONDO_DE_NECESITAS_ASESORIA.png"}
            alt="Fondo section"
            objectFit="contain"
            fill={true}
            quality={100} // Ajusta la calidad de la imagen
            loading="eager" // Carga la imagen de forma prioritaria
            style={{ height:""}}
         
          /></div>
    
        <ContactForm title={"Cuéntanos tu idea"} sendButtontext="Contáctanos" LeftComponent={() => {
          return(
            <h2 style={{display:"flex", backgroundColor:"transparent", width:"32vw", color:"white", fontSize:"5vh", fontWeith:"bold", fontFamily:"Exo", margin:"auto 5vw", letterSpacing:"0.1em" }}>
              ¿Necesitas asesoría para tu proyecto?
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
      <div id="casesSection" className={styles.bsection}>
        <NuestraTrayectoria/>
      </div>
      <div id="contactSection" className={styles.bsectionContact}>
        <ContactForm />
      </div>
    </>
  );
};
