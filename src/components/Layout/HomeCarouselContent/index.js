import { FlexHomeSection } from "../FlexHomeSection"
import Image from "next/image"
import { useMediaQuery } from "@mui/material"
import styles from "./index.module.css"
import { useEffect } from "react"




export const HomeCarouselContent = ({ pic }) => {

    const screenUpper576 = useMediaQuery("(min-width:576px)");
    // style={{ backgroundImage: screenUpper576 ? `url(/assets/home-slider-${pic}.webp)` : `url(/assets/test-1.jpg)`  }}

    return (
        <div className={styles.bsectionHome}>
            <div id="carouselImageBox" className={styles.homeImageBox} >
            <Image
                src={
                    screenUpper576
                      ? `/assets/home-slider-${pic}.webp`
                      : `/assets/test-${pic}.jpg`
                  }
                alt="Fondo"
                fill={true}
                className={styles.image}
                sizes="(max-width: 576px) 100vw, (max-width: 1050px) 70vw (max-width: 2000px) 90vw"
                priority={true}
            />
            </div>
            <FlexHomeSection pic={pic} />

        </div>
    )
}