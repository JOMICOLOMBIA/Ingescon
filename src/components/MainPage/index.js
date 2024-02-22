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
        <ContactForm title={"Cuentanos tu idea"} />
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
