import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./EmailForm.module.css";
import { Button, Typography, FormControl, InputLabel, Input, TextField } from "@mui/material";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sj6c4wg",
        "template_jso44yv",
        form.current,
        "-a7fLrpzWxm2Mhz4K"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.flexContactSection}>
      <div className={styles.divider} />
      <div className={styles.flexContentContactSection}>
        <h1 className={styles.flexContactSectionTitle}> Contáctanos </h1>
        <div className={styles.flexContactSectionBoxText}>
          <Typography className={styles.flexContactSectionText}>Envíanos un mensaje si deseas obtener información más
            precisa sobre tu caso.</Typography>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <div className={styles.formItemBox}>
            <FormControl className={styles.formOptionBox} >
              <InputLabel
                htmlFor="from_name"
                className={styles.formLabel}
              >
                Nombre
              </InputLabel>
              <Input
                type="text"
                name="from_name"
                id="from_name"
                className={styles.formInput} />
            </FormControl>
          </div>
          <div className={styles.formItemBox}>
            <FormControl className={styles.formOptionBox}>
              <InputLabel
                htmlFor="email_id"
                className={styles.formLabel}
              >
                Email
              </InputLabel>
              <Input
                type="email"
                name="email_id"
                id="email_id" />
            </FormControl>
          </div>
          <div className={styles.formItemBox}>
            <FormControl className={styles.formOptionBox}>
              <InputLabel
                htmlFor="phone"
                className={styles.formLabel}
              >
                Numero telefono
              </InputLabel>
              <Input
                type="tel"
                name="phone"
                id="phone" />
            </FormControl>
          </div>
          <div className={styles.formItemBox}>
            <FormControl className={styles.formOptionBox}>
              <InputLabel
                htmlFor="message"
                className={styles.formLabel}
              >
                Mensaje
              </InputLabel>
              <Input
                type="text"
                name="message"
                id="message" />
            </FormControl>
          </div>
          <div className={styles.flexButtonContactS}>
            <Button size="large" type="submit" value="Send">Enviar</Button>
          </div>
        </form>
      </div >
    </div >
  );
};
