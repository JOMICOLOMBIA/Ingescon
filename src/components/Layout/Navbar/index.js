import { NavBarOptions } from "@/components/NavBarOptions";
import Image from "next/image";
import styles from "./Index.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.blogo}>
        <Image
          src="/assets/logowhite.png"
          alt="SDC logo"
          className={styles.logonavbar}
          layout="responsive"
          width={190}
          height={65}
        />
      </div>
      <NavBarOptions />
    </div>
  );
};
