import { Typography } from "@mui/material";
import styles from "./index.module.css"

const cardContent = [
    {title: "Productos y servicios", desc: "Ofrecemos propuestas técnicas que se ajustes a las necesidades de la comunidad"},
    {title: "Cumplimiento", desc: "Excelente calidad de diseño cumpliendo las normativas vigentes"},
    {title: "Sostenibilidad", desc: "Proyectos que abarquen las tres dimensiones: economía, sociedad y ambiente"}
]


export default function YellowBar() {
    return (
        <div className={styles.yellowBar}>
            <div className={styles.flexYellowBar}>
            {
                cardContent.map((content, key) => (
                    <div className={styles.boxCardHome} key={key}>
                        <h2>{content.title}</h2>
                        <Typography className={styles.boxTextCardHome}>{content.desc}</Typography>
                    </div>
                ))
            }
            </div>
        </div>
    );
}