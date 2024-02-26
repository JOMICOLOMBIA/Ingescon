
import Image from "next/image"
import styles from "./index.module.css"


export const BotonFlotante = () => {
    return (
        <div className={styles.boxButton}>
                <a href="https://wa.link/7bezyv" target="_blank">
                <Image
                    alt="Icono whatsapp"
                    src={"/assets/whatsapp.png"}
                    width={100}
                    height={100}
                    layout="responsive"
                    className={styles.image}
                />
                </a>
        </div>
    )
}