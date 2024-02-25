import { HomeCarouselContent } from "../Layout/HomeCarouselContent";
import { Carousel } from "react-responsive-carousel";
import styles from "./index.module.css"
import { useMediaQuery } from "@mui/material";
const carouselContent = [
    { pic: 1, desc: "Descubre el corazón de toda obra civil: Especificaciones diseñadas para garantizar durabilidad y seguridad." },
    { pic: 2, desc: "Ofrecemos servicios de diagnóstico estructural con pruebas especializadas: Realizamos el análisis detallado de estructuras para identificar causas como sobrecargas, fallos de materiales o errores de diseño/construccion." },
    { pic: 3, desc: "Realizamos el seguimiento técnico de la ejecución de contratos, principalmente con entidades estatales. La interventoría permite llevar control y vigilancia de un proyecto para hacerlo más eficiente." },
]

export const CarouselHome = () => {
    const screenUpper900 = useMediaQuery("(max-width:900px)");
    return (
        <Carousel swipeable={!screenUpper900 ? true : false} showThumbs={false} showStatus={false} emulateTouch={true} swipeScrollTolerance={5} showArrows={false} className={styles.carouselBox}
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

                <HomeCarouselContent pic={content.pic} />

            ))}
        </Carousel>
    );
}
