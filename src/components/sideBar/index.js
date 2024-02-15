import React from "react";
import styles from "./Sidebar.module.css"; // Ajusta la importación según tu estructura de archivos y estilos
import { NavBarOptions } from "../NavBarOptions";

const Sidebar = ({ isOpen, onClose, handleClick, onMenuItemClick }) => {
  const sidebarClass = isOpen ? styles.sidebarOpen : styles.sidebarClosed;


  return (
    <div className={`${styles.sidebar} ${sidebarClass}`}>
      <NavBarOptions
        isSideBar={true}
        onMenuItemClick={onMenuItemClick}
      />
    </div>
  );
};

export default Sidebar;
