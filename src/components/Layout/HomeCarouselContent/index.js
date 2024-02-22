import { FlexHomeSection } from "../FlexHomeSection"
import Image from "next/image"
import { useMediaQuery } from "@mui/material"
import styles from "./index.module.css"




export const HomeCarouselContent = ({ pic, desc }) => {

    const screenUpper576 = useMediaQuery("(min-width:576px)");


    return (
        <div className={styles.bsectionHome}>
            <Image
                src={
                    screenUpper576
                        ? `/assets/home-slider-${pic}.jpg`
                        : "/assets/Enmascarar_grupo_73.jpg"
                } // Ruta relativa a la imagen dentro de la carpeta public
                alt="Fondo"
                fill={true}
                className={styles.image}
            />
            <FlexHomeSection pic={pic} desc={desc} />

        </div>
    )
}