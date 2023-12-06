import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Button, Typography } from "@mui/material";
import styles from "./index.module.css";

export const PhotoSliderSection = ({ images, componentesCartas }) => {
  return (
    <div className={styles.carouselContainer}>
      <div
        style={{
          width: "400px",
          height: "400px",
        }}
      >
        <Carousel useKeyboardArrows={true}>
          {images.map((URL, index) => (
            <div className="slide" key={index}>
              <img alt="sample_file" src={URL} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.headerCardProcSection}>
          {componentesCartas[0].title}
        </h2>
        <Typography className={styles.textCardProcSection}>
          {componentesCartas[0].description}
        </Typography>
      </div>
    </div>
  );
};
