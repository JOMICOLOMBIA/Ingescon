import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./index.module.css";
import Image from "next/image";
import { IconButton, Typography, Button, useMediaQuery } from "@mui/material";



const contentCard = [{ image: 1, title: "Consultorías Técnicas", list: ["Diseño hidráulico", "Diseño Geotécnico", "Diseño de vías", "Diseño arquitectónico", "Diseño eléctrico", "Estudios Geotécnicos"] }, { image: 2, title: "Evaluación de edificaciones existentes", list: ["Patología estructural", "Inspección visual detallada por medio de fotogrametría", "Estudio de vulnerabilidad sísmica", "Reforzamiento estructural"] }, { image: 3, title: "Interventoría y supervisión técnica", list: [] }]


export const WeAreExperts = ({ onMenuItemClick = () => { } }) => {

    const screenUpper933 = useMediaQuery("(max-width: 933px)")

    const goToServicios = () => {
        const target = document.getElementById("serviciosSection");

        const targetOffset = target.offsetTop;
        onMenuItemClick(false);
        window.scrollTo({
            top: targetOffset,
            behavior: "smooth",
        });
    };
    return (
        <div className={styles.flexNuestrosSection} id="somosExpertos">


            <div
                className={styles.boxCarousel}
            >
                <h2 className={styles.headerCarouselContent}>{"Somos Expertos"}</h2>
                {
                    <div key={"weareexperts-boxCarouselContent"} className={styles.boxCarouselContent}>


                        <div className={styles.boxCarouselText}>

                            <div className={styles.boxParagraph}>
                                <Typography className={styles.textCarouselContent}>Somos una<strong className={styles.textCarouselBold}> compañía de diseño y consultoría que ofrece soluciones multidisciplinarias para el área de la Ingeniería civil,</strong> acompañando los proyectos desde etapas de prefactibilidad hasta diseños detallados.</Typography>
                            </div>
                            <div className={styles.flexButtonContactS}>
                                <div style={{ marginLeft: !screenUpper933 ? "5vh" : "0", marginBottom: !screenUpper933 ? "0" : "3vh" }}>
                                    <Button
                                        size={!screenUpper933 ? "large" : "small"}
                                        type="submit"
                                        value="Send"
                                        style={{ fontWeight: "bold", width: !screenUpper933 ? "310px" : "200px", padding: "auto 0" }}
                                        onClick={goToServicios}
                                    >
                                        {"Conoce nuestros servicios"}
                                    </Button>
                                </div>
                            </div>

                        </div>
                        <div className={styles.boxImageCarousel}>
                            <Image
                                src={`/assets/exper.png`}
                                fill={true}
                                alt="imagen proyecto"
                            />
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}