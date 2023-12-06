import Image from "next/image";
import styles from "./Index.module.css";
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image
        src="/assets/footer.jpg"
        alt="Rectángulo negro con logo"
        fill={true}
        className={styles.imageFooter}
      />
    </div>
  );
};
