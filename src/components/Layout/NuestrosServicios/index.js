import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./index.module.css";
import Image from "next/image";
import { IconButton } from "@mui/material";


const contentCard = [{ image: 1, title: "Consultorías Técnicas" }, { image: 2, title: "Evaluación de edificaciones existentes" }, { image: 3, title: "Interventoría y supervisión técnica" }]

const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    border: "solid black",
    borderWidth: "0 3px 3px 0",
    display: "inline-block",
    padding: "3px",
}





export const NuestrosServicios = () => {
    return (
        <div className={styles.flexNuestrosSection}>
            <h1 className={styles.flexNuestrosSectionTitle}>Nuestros Servicios</h1>
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
                <Carousel showThumbs={false} showStatus={false} showIndicators={false}
                    statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            // <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                            // </button>
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
                            return (
                                <div key={key} className={styles.boxCarouselContent}>

                                    <div className={styles.boxImageCarousel}>
                                        <Image
                                            src={`/assets/ns-${content.image}.jpg`}
                                            fill={true}
                                            alt="imagen proyecto"
                                        />

                                    </div>
                                    <div className="">
                                        <h2>{content.title}</h2>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}