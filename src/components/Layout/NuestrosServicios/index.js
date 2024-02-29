import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./index.module.css";
import Image from "next/image";
import { IconButton, Typography, useMediaQuery } from "@mui/material";



const contentCard = [{ image: 1, title: "Consultorías Técnicas", list: ["Diseño Estructural", "Diseño Hidráulico", "Diseño Geotécnico", "Diseño de vías", "Diseño Arquitectónico", "Diseño Eléctrico", "Estudios Geotécnicos"] }, { image: 2, title: "Evaluación de edificaciones existentes", list: ["Patología estructural", "Inspección visual detallada por medio de fotogrametría", "Estudio de vulnerabilidad sísmica", "Reforzamiento estructural"] }, { image: 3, title: "Interventoría y supervisión técnica", list: [] }]


export const NuestrosServicios = () => {
    const screenUpper1050px = useMediaQuery("(max-width: 1050px");
    const screenUpper576 = useMediaQuery("(max-width: 576px");

    return (
        <div className={styles.flexNuestrosSection}>
            <p className={styles.flexNuestrosSectionTitle}>Nuestros Servicios</p>
            <div className={styles.boxImage}>
                <Image
                    src="/assets/yellow-bar.png"
                    alt="Yellow bar"
                    fill={true}
                />
            </div>
            <div
                className={styles.boxCarousel}
            >
                <Carousel
                    swipeable={!screenUpper1050px ? true : false}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    emulateTouch={true}
                    swipeScrollTolerance={5}
                    useKeyboardArrows={true}
                    interval={4500}
                    transitionTime={500}
                    infiniteLoop={true}
                    stopOnHover={false}
                    autoPlay={true}
                    statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <IconButton type="button" onClick={onClickHandler} title={label} className={styles.carouselArrow}>
                                <Image
                                    src="/assets/arrow.png"
                                    alt="arrow"
                                    fill={true}
                                />
                            </IconButton>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <IconButton type="button" onClick={onClickHandler} title={label} className={styles.carouselArrowR}>
                                <Image
                                    src="/assets/arrow.png"
                                    alt="arrow"
                                    fill={true}
                                />
                            </IconButton>
                        )
                    }

                >
                    {
                        contentCard.map((content, key) => {

                            switch (content.image) {

                                case 1:
                                    return (
                                        <div key={key} className={styles.boxCarouselContent}>

                                            <div className={styles.boxImageCarousel}>
                                                <Image
                                                    src={`/assets/ns-${content.image}.jpg`}
                                                    fill={true}
                                                    alt="imagen proyecto"
                                                />
                                            </div>
                                            <div className={styles.flexCarouselText}>
                                                <div className={styles.yellowBarBox}>
                                                    <Image
                                                        src={"/assets/yellow-barV.png"}
                                                        width={10}
                                                        height={!screenUpper1050px ? 180 : 120}
                                                        alt="barra amarilla vertical"
                                                        className={styles.yellowBar}
                                                    />
                                                </div>
                                                <div className={styles.boxCarouselText}>
                                                    <h2 className={styles.headerCarouselContent}>{content.title}</h2>
                                                    <div className={styles.boxParagraph}>
                                                        <Typography className={styles.textCarouselContent}>Brindamos<strong className={styles.textCarouselBold}> asesoría y acompañamiento técnicos con profesionales especializados</strong> en las diferentes áreas de la ingeniería como:</Typography>
                                                    </div>
                                                    <ul className={styles.listCarousel}>
                                                        {content.list.map((item, key) =>
                                                            <li key={key}>{item}</li>
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                case 2:
                                    return (
                                        <div key={key} className={styles.boxCarouselContent}>

                                            <div className={styles.boxImageCarousel}>
                                                <Image
                                                    src={`/assets/ns-${content.image}.jpg`}
                                                    fill={true}
                                                    alt="imagen proyecto"
                                                />

                                            </div>
                                            <div className={styles.flexCarouselText}>
                                                <div className={styles.yellowBarBox}>
                                                    <Image
                                                        src={"/assets/yellow-barV.png"}
                                                        width={10}
                                                        height={!screenUpper1050px ? 180 : 140}
                                                        alt="barra amarilla vertical"
                                                        className={styles.yellowBar}
                                                    />
                                                </div>
                                                <div className={styles.boxCarouselText}>
                                                    <h2 className={styles.headerCarouselContent}>{content.title}</h2>
                                                    <div className={styles.boxParagraph}>
                                                        <Typography className={styles.textCarouselContent}>Está orientado en primer lugar hacia edificaciones antiguas, pero también a <strong className={styles.textCarouselBold}>edificaciones que deban ser reparadas o que estén sujetas a cambios de uso</strong> o a modificaciones sustanciales en su estructura. </Typography>
                                                    </div>
                                                    <ul className={styles.listCarousel}>
                                                        {content.list.map((item, key) =>
                                                            <li key={key}>{item}</li>
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                default:
                                    return (
                                        <div key={key} className={styles.boxCarouselContent}>

                                            <div className={styles.boxImageCarousel}>
                                                <Image
                                                    src={`/assets/ns-${content.image}.jpg`}
                                                    fill={true}
                                                    alt="imagen proyecto"

                                                />
                                            </div>
                                            <div className={styles.flexCarouselText}>
                                                <div className={styles.yellowBarBox}>
                                                    <Image
                                                        src={"/assets/yellow-barV.png"}
                                                        height={!screenUpper1050px ? 180 : 140}
                                                        width={10}
                                                        alt="barra amarilla vertical"
                                                        className={styles.yellowBar}
                                                    />
                                                </div>
                                                <div className={styles.boxCarouselText}>
                                                    <h2 className={styles.headerCarouselContent}>{content.title}</h2>
                                                    <div className={styles.boxParagraph}>
                                                        <Typography className={styles.textCarouselContent}><strong className={styles.textCarouselBold}>Interventoría:</strong> Hacemos seguimiento a los estudios y diseños realizados para un determinado proyecto y/o contrato con el fin de hacer cumplir las especificaciones técnicas y actividades de manera adecuada y oportuna. </Typography>
                                                        <br></br><Typography className={styles.textCarouselContent}><strong className={styles.textCarouselBold}>Supervisión Técnica:</strong> Certificamos y comprobamos que los diseños son ejecutados adecuadamente según los diseños y planos realizados por el diseñador estructural</Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                            }

                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}