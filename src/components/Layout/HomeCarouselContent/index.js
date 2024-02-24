import { FlexHomeSection } from "../FlexHomeSection"
import Image from "next/image"
import { useMediaQuery } from "@mui/material"
import styles from "./index.module.css"




export const HomeCarouselContent = ({ pic }) => {

    const screenUpper576 = useMediaQuery("(min-width:576px)");


    return (
        <div className={styles.bsectionHome}>
            <div className={styles.homeImageBox}>
            <Image
                src={
                    screenUpper576
                        ? `/assets/home-slider-${pic}.jpg`
                        : `/assets/home-slider-${pic}.jpg`
                } // Ruta relativa a la imagen dentro de la carpeta public
                alt="Fondo"
                fill={true}
                className={styles.image}
            />
            </div>
            <FlexHomeSection pic={pic} />

        </div>
    )
}