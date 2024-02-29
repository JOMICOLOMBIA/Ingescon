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
                src={`/assets/home-slider-${pic}.jpg`} // Ruta relativa a la imagen dentro de la carpeta public
                alt="Fondo"
                fill={true}
                className={styles.image}
                sizes="(max-width: 728px) 100vw, (max-width: 2000px) 100vw"
                priority={true}
            />
            </div>
            <FlexHomeSection pic={pic} />

        </div>
    )
}