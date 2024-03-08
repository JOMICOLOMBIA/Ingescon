import Image from "next/image";
import styles from "./Index.module.css";
import { Button, Typography, useMediaQuery } from "@mui/material";

const contentContact = [{ icon: "tel", info: "(+57) 3159261302" }, { icon: "mail", info: "contacto@ingesconsultoria.com" }]

export const Footer = () => {


  const screenUpper576 = useMediaQuery("(max-width:576px)")
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
        {!screenUpper576 &&
          <>
            <div className={styles.boxHoverEffect}>
              <div className={styles.boxTextoFooter}>
                <div className={styles.firstBoxFlex}>
                  <div className={styles.boxImage}>
                    <Image
                      src="/assets/copyright.png"
                      alt="icono copyright"
                      width={100}
                      height={100}
                      layout="responsive"
                    />
                  </div>
                  <Typography className={styles.textRights}>Copyright 2023 por INGES</Typography>
                </div>
                <div className={styles.boxTextRights}>
                  <Typography className={styles.textRights}>Todos los derechos reservados</Typography>
                </div>
              </div>
              <div className={styles.loginBox}>
                <div className={styles.boxTextoIngresar}>
                  <p className={styles.headerBoxContact}>
                    Acceso a correo corporativo
                  </p>
                </div>
                <a>
                  <Button size={screenUpper576 ? "large" : "small"} style={{marginBottom: "0"}}>
                    Ingresar
                  </Button>
                </a>
              </div>
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
                      <div className={styles.boxTextContactInfo}>
                        <p className={styles.textContactInfo}>{content.info}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className={styles.boxRedesFooter}>
                <p className={styles.textBoxRedes}>Redes sociales: </p>
                <div className={styles.flexIconRedes}>
                  <div className={styles.boxIconRedes2}>
                    <a href="https://www.instagram.com/inges_consultoria/?hl=en">
                      <Image
                        src="/assets/icon-insta.png"
                        alt="icono instagram"
                        width={100}
                        height={100}
                        layout="responsive"
                      />
                    </a>
                  </div>
                  <div className={styles.boxIconRedes}>
                    <a href="https://www.linkedin.com/company/inges-consultoria-y-dise%C3%B1o/">
                      <Image
                        src="/assets/icon-linke.png"
                        alt="icono linke"
                        width={100}
                        height={100}
                        layout="responsive"
                      />
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </>
        }
        {screenUpper576 &&
          <>


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
                  <div className={styles.boxIconRedes2}>
                    <a href="https://www.instagram.com/inges_consultoria/?hl=en">
                      <Image
                        src="/assets/icon-insta.png"
                        alt="icono instagram"
                        width={110}
                        height={110}
                        layout="responsive"
                      />
                    </a>
                  </div>
                  <div className={styles.boxIconRedes}>
                    <a href="https://www.linkedin.com/company/inges-consultoria-y-dise%C3%B1o/">
                      <Image
                        src="/assets/icon-linke.png"
                        alt="icono linke"
                        width={100}
                        height={100}
                        layout="responsive"
                      />
                    </a>
                  </div>

                </div>
              </div>
            </div>
            <div className={styles.boxHoverEffect}>
              <div className={styles.boxTextoFooter}>
                <div className={styles.firstBoxFlex}>
                  <div className={styles.boxImage}>
                    <Image
                      src="/assets/copyright.png"
                      alt="icono copyright"
                      width={100}
                      height={100}
                      layout="responsive"
                    />
                  </div>
                  <Typography className={styles.textRights}>Copyright 2023 por INGES</Typography>
                </div>
                <div className={styles.boxTextRights}>
                  <Typography className={styles.textRights}>Todos los derechos reservados</Typography>
                </div>
              </div>
              <div className={styles.loginBox}>
                <div className={styles.boxTextoIngresar}>
                  <p className={styles.headerBoxContact}>
                    Acceso a correo corporativo
                  </p>
                </div>
                <a>
                  <Button size={!screenUpper576 ? "large" : "small"} style={{marginBottom: "0"}}>
                    Ingresar
                  </Button>
                </a>
              </div>
            </div>
          </>
        }

      </div>


    </div>
  );
};
