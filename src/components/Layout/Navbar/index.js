import { NavBarOptions } from "@/components/NavBarOptions";
import Image from "next/image";
import styles from "./Index.module.css";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";

import Sidebar from "@/components/sideBar";

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const screenUpper900 = useMediaQuery("(max-width:900px)");

  let showOptions = false;
  const router = useRouter();

  const currentPath = router.asPath;

  if (currentPath === "/SuccessCases") {
    showOptions = true;
  }

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  useEffect(() => {
    const handleScroll = () => {
      const navbarComp = document.getElementById('navbar');
      const scrollPosition = window.scrollY;

      const scrollDiff = 50;

      // Se resetea el color del fondo cuando la posición del scroll pasa cierta cantidad (50)
      if (scrollPosition > scrollDiff) {
        navbarComp.style.backgroundColor = 'rgb(0,0,0,.3)';
        navbarComp.style.backdropFilter = "blur(10px)";
      } else {
        navbarComp.style.backgroundColor = 'transparent';
      }
    }
    //Hacer que funcione solo en desktop, para celulares no se añade el listener
    if (!screenUpper900) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },)




  return (
    <div className={styles.navbar} id="navbar">
      <div className={styles.blogo}>
        <Image
          src="/assets/logowhite.png"
          alt="Logo SDC"
          fill={true}
          className={styles.logonavbar}
        />
      </div>
      {!showOptions && (
        <div className={styles.menuContainer}>
          {/* Icono de menú que muestra/oculta el menú desplegable */}
          <div className={styles.menuIcon}>
            <div className={styles.menuIconContainer}>
              <IconButton onClick={toggleMenu}>
                <MenuIcon className={styles.materialIcon} />
              </IconButton>
            </div>

            <Sidebar isOpen={menuVisible} onMenuItemClick={setMenuVisible} />
          </div>

          {/* Menú desplegable */}
          <div className={styles.menuOptions}>
            <NavBarOptions />
          </div>
        </div>
      )}
    </div>
  );
};
