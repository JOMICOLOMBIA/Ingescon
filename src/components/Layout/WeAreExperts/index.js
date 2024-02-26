import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./index.module.css";
import Image from "next/image";
import { IconButton, Typography, Button  } from "@mui/material";



const contentCard = [{ image: 1, title: "Consultorías Técnicas", list: ["Diseño hidráulico", "Diseño Geotécnico", "Diseño de vías", "Diseño arquitectónico", "Diseño eléctrico", "Estudios Geotécnicos"] }, { image: 2, title: "Evaluación de edificaciones existentes", list: ["Patología estructural", "Inspección visual detallada por medio de fotogrametría", "Estudio de vulnerabilidad sísmica", "Reforzamiento estructural"] }, { image: 3, title: "Interventoría y supervisión técnica", list: [] }]


export const WeAreExperts = () => {
    return (
        <div className={styles.flexNuestrosSection}>
          
           
            <div
                className={styles.boxCarousel}
            >
                
                    {
                       <div key={"weareexperts-boxCarouselContent"} className={styles.boxCarouselContent}>

                       
                       <div className={styles.boxCarouselText}>
                           <h2 className={styles.headerCarouselContent}>{"Somos expertos"}</h2>
                           <div className={styles.boxParagraph}>
                               <Typography className={styles.textCarouselContent}>Brindamos<Typography className={styles.textCarouselBold}> asesoría y acompañamiento técnicos con profesionales especializados</Typography> en las diferentes áreas de la ingeniería como:</Typography>
                           </div>
                           <div className={styles.flexButtonContactS}>
                            <div style={{ padding: "50px 30px"}}>
            <Button
              size={"large" }
              type="submit"
              value="Send"
              style={{ fontWeight:"bold", width:"20vw"}}
            >
             {"Conoce nuestros servicios"}
            </Button>
            </div>
          </div>
                        
                       </div>
                       <div className={styles.boxImageCarousel}>
                           <Image
                               src={`/assets/ns-1.jpg`}
                               fill={true}
                               alt="imagen proyecto"
                           />
                       </div>
                   </div>
                    }
             
            </div>
        </div>
    )
}