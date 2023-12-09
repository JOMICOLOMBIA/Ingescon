import { NavBarOptions } from "@/components/NavBarOptions";
import Image from "next/image";
import styles from "./Index.module.css";
import { useEffect, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { NavbarSuccess } from "../NavbarSuccess";

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(null);
  const { t, i18n } = useTranslation(["common"]);
  const screenUpper576 = useMediaQuery("(max-width:576px)");


  let showOptions = false;
  const router = useRouter();

  const currentPath = router.asPath;

  if (currentPath === "/SuccessCases") {
    showOptions = true;
  }


  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const changeLng = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className={styles.navbar} id="navbar">
      
        <Image
          src="/assets/logowhite.png"
          alt={t("sdcLogo")}
          height={screenUpper576 ? 50 :  60 }
          width={screenUpper576 ? 170 : 200 }
          className={styles.logonavbar}
        />
      {!showOptions &&
        <div className={styles.menuContainer}>
          {/* Icono de menú que muestra/oculta el menú desplegable */}
          <div className={styles.menuIcon}>
            <div className={styles.menuIconContainer}>
              <IconButton onClick={toggleMenu}>
                <MenuIcon className={styles.materialIcon} />
              </IconButton>
              <div
                style={{
                  color: "white",
                  margin: "auto 10px",
                  fontSize: "16px",
                }}
                onClick={() => {
                  changeLng();
                }}
              >
                {i18n.language.toUpperCase()}
              </div>
            </div>

            <Menu
              open={menuVisible}
              onClose={toggleMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem>{t("home")}</MenuItem>
              <MenuItem>{t("procedures")}</MenuItem>
              <MenuItem>{t("aboutUs2")}</MenuItem>
              <MenuItem>{t("successCases")}</MenuItem>
            </Menu>
          </div>

          {/* Menú desplegable */}
          <div className={styles.menuOptions}>
            <NavBarOptions changeLng={() => changeLng()} i18n={i18n} t={t} />
          </div>
        </div>
      }
      {showOptions &&
      <NavbarSuccess/>
      }
    </div>
  );
};
