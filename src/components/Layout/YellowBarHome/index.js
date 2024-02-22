import { Typography } from "@mui/material";
import styles from "./index.module.css"
import Image from "next/image";

const cardContent = [
    {title: "Productos y servicios", desc: "Ofrecemos propuestas técnicas que se ajustes a las necesidades de la comunidad.", icon: "prod"},
    {title: "Cumplimiento", desc: "Excelente calidad de diseño cumpliendo las normativas vigentes.", icon: "cump"},
    {title: "Sostenibilidad", desc: "Proyectos que abarquen las tres dimensiones: economía, sociedad y ambiente.", icon: "sost"}
]


export default function YellowBar() {
    return (
        <div className={styles.yellowBar}>
            <div className={styles.flexYellowBar}>
            {
                cardContent.map((content, key) => (
                    <div className={styles.boxCardHome} key={key}>
                        <Image
                            src={`/assets/${content.icon}-icon.png`}
                            width={100}
                            height={100}
                            alt="Icon"
                        />
                        <Typography className={styles.boxTitleCardHome}>{content.title}</Typography>
                        <Typography className={styles.boxTextCardHome}>{content.desc}</Typography>
                    </div>
                ))
            }
            </div>
        </div>
    );
}