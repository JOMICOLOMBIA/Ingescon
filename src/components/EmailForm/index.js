import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./EmailForm.module.css";

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
    <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
      <div className={`${styles.field} ${styles.customField}`}>
        <label
          htmlFor="from_name"
          className={`${styles.label} ${styles.customLabel}`}
        >
          Name
        </label>
        <input
          type="text"
          name="from_name"
          id="from_name"
          className={`${styles.input} ${styles.customInput}`}
        />
      </div>

      <div className={`${styles.field} ${styles.customField}`}>
        <label
          htmlFor="email_id"
          className={`${styles.label} ${styles.customLabel}`}
        >
          Email
        </label>
        <input
          type="email"
          name="email_id"
          id="email_id"
          className={`${styles.input} ${styles.customInput}`}
        />
      </div>

      <div className={`${styles.field} ${styles.customField}`}>
        <label
          htmlFor="phone"
          className={`${styles.label} ${styles.customLabel}`}
        >
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className={`${styles.input} ${styles.customInput}`}
        />
      </div>

      <div className={`${styles.field} ${styles.customField}`}>
        <label
          htmlFor="message"
          className={`${styles.label} ${styles.customLabel}`}
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className={`${styles.textarea} ${styles.customTextarea}`}
        />
      </div>

      <input
        type="submit"
        value="Send"
        className={`${styles.submitButton} ${styles.customSubmitButton}`}
      />
    </form>
  );
};
