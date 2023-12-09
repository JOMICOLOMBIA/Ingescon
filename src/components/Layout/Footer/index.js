import Image from "next/image";
import styles from "./Index.module.css";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation(["common"]);
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
          className={styles.image}
        />
        <div className={styles.boxRedes}>
          <Typography className={styles.textFooter}>
            {" "}
            {t("our_networks")}{" "}
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
