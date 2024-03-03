import { HomeCarouselContent } from "../Layout/HomeCarouselContent";
import { Carousel } from "react-responsive-carousel";
import styles from "./index.module.css"
import { Button, IconButton, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";




const carouselContent = [
    { pic: 1, desc: "Descubre el corazón de toda obra civil: Especificaciones diseñadas para garantizar durabilidad y seguridad." },
    { pic: 2, desc: "Ofrecemos servicios de diagnóstico estructural con pruebas especializadas: Realizamos el análisis detallado de estructuras para identificar causas como sobrecargas, fallos de materiales o errores de diseño/construccion." },
    { pic: 3, desc: "Realizamos el seguimiento técnico de la ejecución de contratos, principalmente con entidades estatales. La interventoría permite llevar control y vigilancia de un proyecto para hacerlo más eficiente." },
]

export const CarouselHome = () => {
    const screenUpper900 = useMediaQuery("(max-width:933px)");

    const [playCarousel, setPlayCarousel] = useState(false);


    const handlePlay = () => {
        if (playCarousel === false) {
            setPlayCarousel(true)
        } else {
            console.log("none")
        }
    }

    const handlePause = () => {

        if (playCarousel === true) {
            setPlayCarousel(false)
        } else {
            console.log("none")
        }
    }


    useEffect(() => {
        console.log(playCarousel)
    }, [playCarousel])

    return (
        <>
            <Carousel
                swipeable={false}
                autoPlay={playCarousel}
                showThumbs={false}
                interval={2500}
                transitionTime={500}
                showStatus={false}
                // infiniteLoop={true}
                stopOnHover={false}
                showArrows={false}
                id="homeSection"
                className={styles.carouselBox}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    if (isSelected) {
                        return (
                            <li
                                className={`${styles.indicatorCarousel} ${styles.indicatorS}`}
                                aria-label={`Selected: ${label} ${index + 1}`}
                                title={`Selected: ${label} ${index + 1}`}
                            />
                        );
                    }
                    return (
                        <li
                            className={styles.indicatorCarousel}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            title={`${label} ${index + 1}`}
                            aria-label={`${label} ${index + 1}`}
                        />
                    );
                }}
            >
                {carouselContent.map((content, key) => (

                    <HomeCarouselContent pic={content.pic} key={key}/>

                ))}
            </Carousel>
            <div className={styles.boxControlesCarousel}>
                <div className={styles.boxIconControl}>
                    <IconButton type="button" className={styles.buttonControles} onClick={() => { handlePlay() }}>
                        <Image
                            src={"/assets/play-button.png"}
                            alt="play button"
                            fill={true}
                            className={styles.imageButtonControl}
                        />
                    </IconButton>
                </div>
                <div className={styles.boxIconControl}>
                    <IconButton type="button" className={styles.buttonControles} onClick={handlePause}>
                        <Image
                            src={"/assets/pause-button.png"}
                            alt="pause button"
                            fill={true}
                            className={styles.imageButtonControl}
                        />
                    </IconButton>
                </div>
            </div>
        </>

    );
}
