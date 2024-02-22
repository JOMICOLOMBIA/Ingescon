import { FlexHomeSection } from "../FlexHomeSection"
import Image from "next/image"
import { useMediaQuery } from "@mui/material"
import styles from "./index.module.css"

const homeContent = [
    {
        title: "",
        desc: "",
    },
    {
        title: "",
        desc: "",
    },
    {
        title: "",
        desc: "",
    },

]


export const HomeCarouselContent = ({pic}) => {

    const screenUpper576 = useMediaQuery("(min-width:576px)");


    return (
        <>
            <div className={styles.bsectionHome}>
                <Image
                    src={
                        screenUpper576
                            ? `/assets/home-slider-${pic}.jpg`
                            : "/assets/Enmascarar_grupo_73.jpg"
                    } // Ruta relativa a la imagen dentro de la carpeta public
                    alt="Mujer sonriendo"
                    width={100} // Ancho de la imagen en píxeles
                    height={100} // Alto de la imagen en píxeles
                    layout="responsive"
                    className={styles.image}
                />
                <FlexHomeSection />

            </div>
        </>
    )
}