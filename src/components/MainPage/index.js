import { ContactForm } from "../EmailForm";
import styles from "./Index.module.css";

import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";

import { FlexProyectos } from "../Layout/FlexProyectos";
import { Navbar } from "@/components/Layout/Navbar";
import YellowBar from "../Layout/YellowBarHome";
import { NuestrosServicios } from "../Layout/NuestrosServicios";
import { HomeCarouselContent } from "../Layout/HomeCarouselContent";
import { Carousel } from "react-responsive-carousel";






export const MainPage = () => {

  return (
    <>
      <Navbar />
      <Carousel swipeable={true} showThumbs={false} showStatus={false} emulateTouch={true} swipeScrollTolerance={5} showArrows={false} className={styles.carouselBox}>
        <Box id="homeSection" className={styles.bsectionHome}>

          <HomeCarouselContent />
        </Box>
        <Box id="homeSection" className={styles.bsectionHome}>

          <HomeCarouselContent />
        </Box>
        </Carousel>
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
