import { NavBarOptions } from "@/components/NavBarOptions";
import Image from "next/image";
import styles from "./Index.module.css";
import { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(null);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={styles.navbar} id="navbar">
      <div className={styles.blogo}>
        <Image
          src="/assets/logowhite.png"
          alt="SDC logo"
          fill={true}
          className={styles.logonavbar}
          // layout="responsive"
          // width={100}
          // height={65}
        />
      </div>
      <div className={styles.menuContainer}>
        {/* Icono de menú que muestra/oculta el menú desplegable */}
        <div className={styles.menuIcon} >
          {/* ☰ */}
          <IconButton onClick={toggleMenu}>
            <MenuIcon className={styles.materialIcon} />
          </IconButton>
          <Menu
            open={menuVisible}
            onClose={toggleMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem>
              Inicio
            </MenuItem>
            <MenuItem>
              Procedimientos
            </MenuItem>
            <MenuItem>
              Acerca de nosotros
            </MenuItem>
            <MenuItem>
              Casos de éxito
            </MenuItem>
          </Menu>

        </div>
        {/* Menú desplegable */}

        <div className={styles.menuOptions}>
          <NavBarOptions />
        </div>
      </div>
    </div>
  );
};
