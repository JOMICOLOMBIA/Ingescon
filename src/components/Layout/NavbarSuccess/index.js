import { Typography } from "@mui/material"
import styles from "./index.module.css"
import { useState } from "react"
import { useRouter } from "next/router";

export const NavbarSuccess = () => {


    const router = useRouter();

    const redirectHome = () => {
        router.push("/")
    };

    return (
        <>
            <div className={styles.boptionsNotClicked} onClick={redirectHome}>
                <Typography className={styles.textNotClicked}>
                    Volver a la página de inicio
                </Typography>
            </div>
        </>
    )
}