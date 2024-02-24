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
  TextField
} from "@mui/material";
import { toast } from "react-toastify";

export const ContactForm = ({title="Contáctanos", LeftComponent = () => {}, cardView = false, sendButtontext="Enviar"}) => {


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
    <div className={styles.flexContactSection  }>
      
      {<LeftComponent/>}
    
      {screenUpper576 && <div className={styles.divider} />}
      <div className={!cardView ?styles.flexContentContactSection: styles.flexContactCardSection}>
        <h1 className={styles.flexContactSectionTitle}  > {title} </h1>
        
          {!cardView &&(<div className={styles.flexContactSectionBoxText}> <Typography className={styles.flexContactSectionText}>
            Envíanos un mensaje si deseas obtener información más precisa sobre tu caso.
          </Typography>
        </div>  )}
         
        <form onSubmit={sendEmail} className={styles.contactForm}>
          <div className={styles.formItemBox}>
            <FormControl className={styles.formOptionBox}>
            
              <TextField
              label={"Nombre y Apellidos*"}
                type="text"
                name="from_name"
                variant="outlined" 
                id="from_name"
                value={formData.from_name}
                onChange={handleInputChange}
              />
            </FormControl>
          </div>
          <div style={{display:"flex", gap: "2vw"}}>
          <div className={styles.formItemBox} style={{ width:"50%"}}>
            <FormControl className={styles.formOptionBox}>
            <FormControl className={styles.formOptionBox}>
            
            <TextField
            label={"Email*"}
              type="text"
              name="emial_id"
              variant="outlined" 
              id="email_id"
              value={formData.email_id}
              onChange={handleInputChange}
            />
          </FormControl>
            </FormControl>
          </div>
          <div className={styles.formItemBox} style={{ width:"50%"}}>
            <FormControl className={styles.formOptionBox}>
            
            <TextField
            label={"Número de teléfono*"}
              type="text"
              name="from_name"
              variant="outlined" 
              id="from_name"
              value={formData.from_name}
              onChange={handleInputChange}
            />
          </FormControl>
         
          </div>
          </div>
          {!cardView &&( <div className={styles.formItemBox}>
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
          </div>)}
         
          <div className={styles.flexButtonContactS}>
            <Button
              size={screenUpper576 ? "large" : "small"}
              type="submit"
              value="Send"
              style={{ fontWeight:"bold", height:"4vh"}}
            >
             {sendButtontext}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
