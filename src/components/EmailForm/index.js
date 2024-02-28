import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./EmailForm.module.css";
import {
  Button,
  Typography,
  FormControl,
  InputLabel,
  Input,
  useMediaQuery,
  TextField, 
  Select, 
  MenuItem
} from "@mui/material";
import { toast } from "react-toastify";

export const ContactForm = ({title="Contáctanos", LeftComponent = () => {}, cardView = false, sendButtontext="Enviar", integrationKey = null}) => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const countryNames = data.map(country => country.name.common).sort((a, b) => a.localeCompare(b));
        setCountries([...countryNames]);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);


  const screenUpper576 = useMediaQuery("(min-width:930px)");
  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    phone: "",
    message: "",
  });

  const sendEmail = (e) => {
    console.log("email", integrationKey);
    e.preventDefault();

    emailjs
      .sendForm(
       integrationKey?.service,
       integrationKey?.template,
        e.target,
        integrationKey?.publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            from_name: "",
            email_id: "",
            phone: "",
            message: "",
            sent_cellphone_number:"",
            sent_email:"", 
            country:"", 
            interest_service:"", 
            message:""
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
      <h1 className={styles.flexContactSectionTitle}  >{cardView ? title:null }</h1>
        
         
         
        <form onSubmit={sendEmail} className={styles.contactForm}>
        {cardView && (<>
          <div className={styles.formItemBox}>
            <FormControl className={styles.formOptionBox} required>
            
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
            
            <TextField
            label={"Email*"}
              type="email"
              name="sent_email"
              variant="outlined" 
              id="sent_email"
              value={formData.sent_email}
              onChange={handleInputChange}
            />
          </FormControl>
         
          </div>
          <div className={styles.formItemBox} style={{ width:"50%"}}>
            <FormControl className={styles.formOptionBox}>
            
            <TextField
            label={"Número de teléfono*"}
              type="number"
              name="sent_cellphone_number"
              variant="outlined" 
              id="sent_cellphone_number"
              value={formData.sent_cellphone_number}
              onChange={handleInputChange}
            />
          </FormControl>
         
          </div>
          </div></>)}
          {!cardView &&( <div className={styles.formItemBox}>
            <div style={{display:"flex", gap: "2vw"}}>
          <div className={styles.formItemBox} style={{ width:"50%"}}>
          <FormControl className={styles.formOptionBox}  >
            
          <InputLabel htmlFor="sent_cellphone_number" className={styles.formLabel} InputLabelProps={{ shrink: true }}>
                        
          </InputLabel>
              <TextField
            label={"Nombre completo"}
              type="text"
              name="complete_name"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              id="complete_name"
              value={formData.complete_name}
              onChange={handleInputChange}
            />
          </FormControl>
         
          </div>
          
          <div className={styles.formItemBox} style={{ width:"50%"}}>
            <FormControl className={styles.formOptionBox}>
            
          
              <TextField
            label={"Número de teléfono*"}
              type="number"
              name="sent_cellphone_number"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              id="sent_cellphone_number"
              value={formData.sent_cellphone_number}
              onChange={handleInputChange}
            />
          </FormControl>
         
          </div> 
          
          </div>
          <div style={{display:"flex", gap: "2vw"}}>
          <div className={styles.formItemBox} style={{ width:"50%"}}>
          <FormControl className={styles.formOptionBox}>
  <InputLabel>País</InputLabel>
  <Select
    label="País"
    name="country"
    variant="filled"
    id="country"
    value={formData.country}
    onChange={handleInputChange}
  >
    {countries.map((country, index) => (
      <MenuItem key={index} value={country}>{country}</MenuItem>
    ))}
  </Select>
</FormControl>
         
          </div>
          
          <div className={styles.formItemBox} style={{ width:"50%"}}>
            <FormControl className={styles.formOptionBox}>
            
           <TextField
            label={"Correo electrónico*"}
              type="email"
              name="sent_email"
              InputLabelProps={{ shrink: true }}
              variant="filled"
              id="sent_email"
              value={formData.sent_email}
              onChange={handleInputChange}
            />
          </FormControl>
         
          </div> 
          
          </div>
            <FormControl className={styles.formOptionBox}>
              <InputLabel htmlFor="message" className={styles.formLabel}>
                Escribe tu servicio de interés
              </InputLabel>
              <Input
                type="text"
                name="interest_service"
                id="interest_service"
                value={formData.interest_service}
                onChange={handleInputChange}
              />
            </FormControl> 
            
            <FormControl className={styles.formOptionBox}  style={{marginTop:20}}>
             
              <TextField
              label={"Mensaje"}
              multiline
              rows={4} 
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
