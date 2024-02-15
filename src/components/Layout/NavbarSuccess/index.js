import { Typography } from "@mui/material";
import styles from "./index.module.css";

import { useRouter } from "next/router";


export const NavbarSuccess = () => {
  const router = useRouter();


  const redirectHome = () => {
    router.push("/");
  };

  return (
    <>
      <div
        className={styles.boptionsNotClicked}
        onClick={redirectHome}
        style={{ marginLeft: "auto" }}
      >
        <Typography className={styles.textNotClicked}>
          Contacto
        </Typography>
      </div>
    </>
  );
};
