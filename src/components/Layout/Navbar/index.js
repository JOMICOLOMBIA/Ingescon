import { NavBarOptions } from "@/components/NavBarOptions";
import Image from "next/image";
import styles from "./Index.module.css";
import { useState } from "react";

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

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
      <div className={styles.menuContainer}>
        {/* Icono de menú que muestra/oculta el menú desplegable */}
        <div className={styles.menuIcon} onClick={toggleMenu}>
          ☰
        </div>
        {/* Menú desplegable */}

        <div className={styles.menuOptions}>
          <NavBarOptions />
        </div>
      </div>
    </div>
  );
};
