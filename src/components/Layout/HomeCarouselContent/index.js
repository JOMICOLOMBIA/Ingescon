import { FlexHomeSection } from "../FlexHomeSection"
import Image from "next/image"
import { useMediaQuery } from "@mui/material"
import styles from "./index.module.css"
import { useEffect } from "react"




export const HomeCarouselContent = ({ pic }) => {

    const screenUpper576 = useMediaQuery("(min-width:576px)");

    // function bgImage() {
    //     const element = document.getElementById("myDIV");
    //     element.classList.add("background-image: url('/assets/logowhite.png')");
    // }

    // useEffect(() => {
    //     bgImage()
    // }, []);


    return (
        <div className={styles.bsectionHome}>
            <div id="carouselImageBox" className={styles.homeImageBox} style={{ backgroundImage: `url(/assets/home-slider-${pic}.webp)` }}>
            {/* <Image
                src={`/assets/home-slider-${pic}.webp`} // Ruta relativa a la imagen dentro de la carpeta public
                alt="Fondo"
                fill={true}
                className={styles.image}
                sizes="(max-width: 728px) 100vw, (max-width: 2000px) 100vw"
                priority={true}
            /> */}
            </div>
            <FlexHomeSection pic={pic} />

        </div>
    )
}