import { useMediaQuery } from "@mui/material";
import styles from "./index.module.css";
import Image from "next/image";

export const NuestraTrayectoria = () => {

    const screenUpper560 = useMediaQuery("(max-width: 576px");

    return (
        <div className={styles.flexNuestraTrayectoria}>
            <p className={styles.flexTrayectoriaSectionTitle}>Nuestra Trayectoria</p>
            <div className={styles.boxImage}>
                <Image
                    src="/assets/yellow-bar.png"
                    alt="Yellow bar"
                    fill={true}
                />
            </div>
            <div className={styles.boxImageNuestraTrayectoria}>
                <Image
                    src={!screenUpper560 ? "/assets/nuestra-trayectoria-desk.png" : "/assets/nuestra-trayectoria-mobile.png" }
                    alt="Nuestra trayectoria"
                    fill={true}
                    className={styles.imagenNuestraT}
                />
            </div>
        </div>
    )
}