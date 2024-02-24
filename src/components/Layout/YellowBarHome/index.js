import { Typography, useMediaQuery } from "@mui/material";
import styles from "./index.module.css"
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const cardContent = [
    { title: "Productos y servicios", desc: "Ofrecemos propuestas técnicas que se ajustes a las necesidades de la comunidad.", icon: "prod" },
    { title: "Cumplimiento", desc: "Excelente calidad de diseño cumpliendo las normativas vigentes.", icon: "cump" },
    { title: "Sostenibilidad", desc: "Proyectos que abarquen las tres dimensiones: economía, sociedad y ambiente.", icon: "sost" }
]


export default function YellowBar() {

    const screenUpper560 = useMediaQuery("(min-width: 560px)")
    console.log(screenUpper560)
    return (
        <div className={styles.yellowBar}>
            {screenUpper560 &&
                <div className={styles.flexYellowBar}>
                    {
                        cardContent.map((content, key) => (
                            <div className={styles.boxCardHome} key={key}>
                                <div className={styles.boxIconCardHome}>
                                <Image
                                    src={`/assets/${content.icon}-icon.png`}
                                    alt="Icon"
                                    fill={true}
                                    className={styles.imageCard}
                                />
                                </div>
                                <Typography className={styles.boxTitleCardHome}>{content.title}</Typography>
                                <Typography className={styles.boxTextCardHome}>{content.desc}</Typography>
                            </div>
                        ))
                    }
                </div>
            }
            {!screenUpper560 &&
                <Carousel
                    className={styles.flexYellowBar}
                    swipeable={true}
                    showThumbs={false}
                    showStatus={false}
                    emulateTouch={true}
                    swipeScrollTolerance={5}
                    showArrows={false}
                    showIndicators={false}
                >
                    {
                        cardContent.map((content, key) => (
                            <div className={styles.boxCardHome} key={key}>
                                <div className={styles.boxIconCardHome}>
                                <Image
                                    src={`/assets/${content.icon}-icon.png`}
                                    alt="Icon"
                                    fill={true}
                                    className={styles.imageCard}
                                />
                                </div>
                                <Typography className={styles.boxTitleCardHome}>{content.title}</Typography>
                                <Typography className={styles.boxTextCardHome}>{content.desc}</Typography>
                            </div>
                        ))
                    }
                </Carousel>
            }
        </div>
    );
}