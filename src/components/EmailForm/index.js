import React, { useRef } from "react";
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
import { useTranslation } from "react-i18next";

export const ContactForm = () => {
  const { t } = useTranslation("common");

  const screenUpper576 = useMediaQuery("(min-width:930px)");
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
      {screenUpper576 && <div className={styles.divider} />}
      <div className={styles.flexContentContactSection}>
        <h1 className={styles.flexContactSectionTitle}> {t("contactUs")} </h1>
        <div className={styles.flexContactSectionBoxText}>
          <Typography className={styles.flexContactSectionText}>
            {t("sendMessage")}
          </Typography>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <div className={styles.formItemBox}>
            <FormControl className={styles.formOptionBox}>
              <InputLabel htmlFor="from_name" className={styles.formLabel}>
                {t("name")}
              </InputLabel>
              <Input
                type="text"
                name="from_name"
                id="from_name"
                className={styles.formInput}
              />
            </FormControl>
          </div>
          <div className={styles.formItemBox}>
            <FormControl className={styles.formOptionBox}>
              <InputLabel htmlFor="email_id" className={styles.formLabel}>
                {t("email")}
              </InputLabel>
              <Input type="email" name="email_id" id="email_id" />
            </FormControl>
          </div>
          <div className={styles.formItemBox}>
            <FormControl className={styles.formOptionBox}>
              <InputLabel htmlFor="phone" className={styles.formLabel}>
                {t("phoneNumber")}
              </InputLabel>
              <Input type="tel" name="phone" id="phone" />
            </FormControl>
          </div>
          <div className={styles.formItemBox}>
            <FormControl className={styles.formOptionBox}>
              <InputLabel htmlFor="message" className={styles.formLabel}>
                {t("message")}
              </InputLabel>
              <Input type="text" name="message" id="message" />
            </FormControl>
          </div>
          <div className={styles.flexButtonContactS}>
            <Button
              size={screenUpper576 ? "large" : "small"}
              type="submit"
              value="Send"
            >
              {t("send")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
