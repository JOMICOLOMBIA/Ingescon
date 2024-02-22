import { HomeCarouselContent } from "../Layout/HomeCarouselContent";
import { Carousel } from "react-responsive-carousel";
import styles from "./index.module.css"

export const CarouselHome = () => {
    return (
        <Carousel swipeable={true} showThumbs={false} showStatus={false} emulateTouch={true} swipeScrollTolerance={5} showArrows={false} className={styles.carouselBox}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                        <li
                            className={`${styles.indicatorCarousel} ${styles.indicatorS}`}
                            aria-label={`Selected: ${label} ${index + 1}`}
                            title={`Selected: ${label} ${index + 1}`}
                        />
                    );
                }
                return (
                    <li
                        className={styles.indicatorCarousel}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        title={`${label} ${index + 1}`}
                        aria-label={`${label} ${index + 1}`}
                    />
                );
            }}
        >
            <HomeCarouselContent pic={1}/>
            <HomeCarouselContent pic={2}/>
        </Carousel>
    );
}
