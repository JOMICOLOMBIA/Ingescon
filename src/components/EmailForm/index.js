import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./EmailForm.module.css";
import {
  Button,
  Typography,
  FormControl,
  InputLabel,
  Input,
  useMediaQuery,
} from "@mui/material";
import { toast } from "react-toastify";

export const ContactForm = ({title="Contáctanos"}) => {


  const screenUpper576 = useMediaQuery("(min-width:930px)");
  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    phone: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sj6c4wg",
        "template_jso44yv",
        e.target,
        "-a7fLrpzWxm2Mhz4K"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            from_name: "",
            email_id: "",
            phone: "",
            message: "",
          });
          toast.success("¡Correo enviado con éxito!");
        },
        (error) => {
          console.log(error.text);
          toast.error("¡Error al enviar el correo!");
        }
      );
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.flexContactSection}>
      {screenUpper576 && <div className={styles.divider} />}
      <div className={styles.flexContentContactSection}>
        <h1 className={styles.flexContactSectionTitle}> {title} </h1>
        <div className={styles.flexContactSectionBoxText}>
          <Typography className={styles.flexContactSectionText}>
            Envíanos un mensaje si deseas obtener información más precisa sobre tu caso.
          </Typography>
        </div>
        <form onSubmit={sendEmail} className={styles.contactForm}>
          <div className={styles.formItemBox}>
            <FormControl className={styles.formOptionBox}>
              <InputLabel htmlFor="from_name" className={styles.formLabel}>
                Nombre
              </InputLabel>
              <Input
                type="text"
                name="from_name"
                id="from_name"
                className={styles.formInput}
                value={formData.from_name}
                onChange={handleInputChange}
              />
            </FormControl>
          </div>
          <div className={styles.formItemBox}>
            <FormControl className={styles.formOptionBox}>
              <InputLabel htmlFor="email_id" className={styles.formLabel}>
                Email
              </InputLabel>
              <Input
                type="email"
                name="email_id"
                id="email_id"
                value={formData.email_id}
                onChange={handleInputChange}
              />
            </FormControl>
          </div>
          <div className={styles.formItemBox}>
            <FormControl className={styles.formOptionBox}>
              <InputLabel htmlFor="phone" className={styles.formLabel}>
                Número de teléfono
              </InputLabel>
              <Input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </FormControl>
          </div>
          <div className={styles.formItemBox}>
            <FormControl className={styles.formOptionBox}>
              <InputLabel htmlFor="message" className={styles.formLabel}>
                Mensaje
              </InputLabel>
              <Input
                type="text"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </FormControl>
          </div>
          <div className={styles.flexButtonContactS}>
            <Button
              size={screenUpper576 ? "large" : "small"}
              type="submit"
              value="Send"
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
