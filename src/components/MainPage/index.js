import { ContactForm } from "../EmailForm";
import styles from "./Index.module.css";

import Image from "next/image";

import { FlexProyectos } from "../Layout/FlexProyectos";

import YellowBar from "../Layout/YellowBarHome";
import { NuestrosServicios } from "../Layout/NuestrosServicios";
import { CarouselHome } from "../CarouselHome";
import { WeAreExperts } from "../Layout/WeAreExperts";
import { NuestraTrayectoria } from "../NuestraTrayectoria";



export const MainPage = () => {

  return (
    <>
      <CarouselHome />
      <YellowBar />
      <WeAreExperts />

      <div id="contactSection" className={styles.bsectionContact}>
        <div >
          <Image
            src={"/assets/FONDO_DE_NECESITAS_ASESORIA.png"}
            alt="Fondo section"
          
            fill={true}
            quality={100} // Ajusta la calidad de la imagen
            loading="eager" // Carga la imagen de forma prioritaria
          /></div>
    
        <ContactForm integrationKey={{
        service: "service_r3wz6ok",
        template:"template_t36jaf9",
        publicKey:"cgAQ725WoCfaP4VLZ"
        }} title={"Cuéntanos tu idea"} sendButtontext="Contáctanos" LeftComponent={() => {
          return(
            <h2 className={styles.customTextContactSection}>
              ¿Necesitas asesoría para tu proyecto?
            </h2>
          )
        }} cardView={true} />
      </div>

      <div id="serviciosSection" className={styles.ourServicesSection}>
        <NuestrosServicios />
      </div>
      <div id="proySection" className={styles.bsectionCases}>
        <FlexProyectos />
      </div>
      <div id="trayectoriaSection" className={styles.bsection}>
        <NuestraTrayectoria />
      </div>
      <div id="contactSection2" className={styles.bsectionContact2}>
        <ContactForm integrationKey={{
        service: "service_r3wz6ok",
        template:"template_ikmvw7b",
        publicKey:"cgAQ725WoCfaP4VLZ"
        }} LeftComponent={() => {
          return(<div className={styles.customHeaderContainer }><h2 className={styles.customHeader}>
          HABLEMOS DE TU PROYECTO
         </h2>
         <div style={{ borderBottom:"4px solid yellow", paddingBottom:20, marginLeft:20}}>Hablanos de tu ídea, y te mostraremos el camino para hacerla realidad.</div>
         </div> )
        }}/>
      </div>
    </>
  );
};
