import Image from "next/image";
import styles from "./Index.module.css";
import { Typography } from "@mui/material";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image
        src="/assets/footer.jpg"
        alt="Rectángulo negro con logo"
        fill={true}
        className={styles.imageFooter}
      />
      <div className={styles.flexFooter}>
        <Image
          src="/assets/logowhite.png"
          width={100}
          height={100}
          layout="responsive"
        />
        <div className={styles.boxRedes}>
          <Typography className={styles.textFooter}>
            {" "}
            Nuestras redes:{" "}
          </Typography>
          <div className={styles.boxImage}>
            <Image
              src="/assets/ico-instagram.svg"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div className={styles.boxImage}>
          <Image
            src="/assets/ico-whatsapp.svg"
            width={100}
            height={100}
            layout="responsive"
          />
          </div>
        </div>
      </div>
    </div>
  );
};
