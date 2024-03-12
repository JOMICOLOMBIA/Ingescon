import Image from "next/image";
import { Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import styles from "./index.module.css"


export const ContentFlexProyectos = ({key, proyect}) => {

    const screenUpper576 = useMediaQuery(("max-width: 576px"));
    const [isClicked, setIsClicked] = useState(false);
    const box = document.getElementById("topBox");
    // const [topBoxClass, setTopBoxClass] = useState(styles.topBoxNotClicked)


    const handleTap = () => {
        setIsClicked(!isClicked);
    }


    return (
        <div className={styles.boxHoverEffect} onClick={() => handleTap()} key={key}>
            <div className={styles.bottomBox}>
                <Image // src="/assets/proyect-1.png"
                    src={`/assets/proyect-${proyect.image}.png`} alt="Foto proyecto" fill={true} className={styles.imageProject} />
            </div>

            <div className={isClicked ? styles.topBoxClicked : styles.topBoxNotClicked} id="topBox">
                <Image // src="/assets/proyect-1.png"
                    src={"/assets/hover-view.png"} alt="cuadro negro con alfa baja" fill={true} className={styles.imageHover} />
                <h3 className={styles.titleCardProyect}>{proyect.title}</h3>
                <Typography className={styles.textCardProyect}>
                    {proyect.description}
                </Typography>
            </div>
        </div>
    );
}