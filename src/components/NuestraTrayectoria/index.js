import styles from "./index.module.css";
import Image from "next/image";

export const NuestraTrayectoria = () => {

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
        </div>
    )
}