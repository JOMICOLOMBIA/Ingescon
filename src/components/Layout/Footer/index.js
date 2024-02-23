import Image from "next/image";
import styles from "./Index.module.css";
import { Typography, useMediaQuery } from "@mui/material";

const contentContact = [{ icon: "tel", info: "(+57) 3159261302" }, { icon: "mail", info: "contacto@ingesconsultoria.com" }]

export const Footer = () => {

  return (
    <div className={styles.footer}>
      <div className={styles.flexFooter}>
        <div className={styles.boxLogoFooter}>
        <Image
          src="/assets/logowhite.png"
          alt="Ingescon logo"
          width={100}
          height={100}
          layout="responsive"
          className={styles.image}
        />
        </div>
        <div className={styles.boxTextoFooter}>
          <div className={styles.firstBoxFlex}>
            <div className={styles.boxImage}>
              <Image
                src="/assets/copyright.png"
                alt="logo whatsapp "
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
            <Typography className={styles.textRights}>Copyright 2023 por INGES</Typography>
          </div>
          <Typography className={styles.textRights}>Todos los derechos reservados</Typography>
        </div>
        <div className={styles.boxContactFooter}>
          <Typography className={styles.headerBoxContact}>CONTACTANOS</Typography>
          <div className={styles.boxContactInfo}>
            {
              contentContact.map((content, key) => (
                <div className={styles.flexContactInfo} key={key}>
                  <div className={styles.boxIconContact}>
                    <Image
                      src={`/assets/icon-${content.icon}.png`}
                      alt={`icono ${content.icon}`}
                      width={100}
                      height={100}
                      layout="responsive"
                    />
                  </div>
                  <p className={styles.textContactInfo}>{content.info}</p>
                </div>
              ))
            }
          </div>
          <div className={styles.boxRedesFooter}>
            <p className={styles.textBoxRedes}>Redes sociales: </p>
            <div className={styles.flexIconRedes}>
              <div className={styles.boxIconRedes}>
                <Image
                  src="/assets/icon-linke.png"
                  alt="icono linke"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
              <div className={styles.boxIconRedes}>
                <Image
                  src="/assets/icon-faceb.png"
                  alt="icono faceb"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};
