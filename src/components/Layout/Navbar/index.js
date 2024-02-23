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

      if (scrollPosition > scrollDiff) {
        navbarComp.style.backgroundColor = 'rgb(0,0,0,.3)';
        navbarComp.style.backdropFilter = "blur(10px)";
      } else {
        navbarComp.style.backgroundColor = 'transparent'; // Reset background color when scrolling up
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])



  return (
    <div className={styles.navbar} id="navbar">
      <Image
        src="/assets/logowhite.png"
        alt="Logo SDC"
        height={54}
        width={143}
        className={styles.logonavbar}
      />
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
            <NavBarOptions changeLng={() => changeLng()} />
          </div>
        </div>
      )}
    </div>
  );
};
