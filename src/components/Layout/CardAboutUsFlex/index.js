import Image from "next/image";
import styles from "./index.module.css";
import { Typography, useMediaQuery, Button } from "@mui/material";

// const componentesCartas = [{
//     title: "¿Qué somos?",
//     description: "Somos un grupo de expertos altamente capacitados en mejorar sonrisas y devolverles la confianza para sonreír. Nos apasiona cuidar de tu salud bucal por esta razón todos nuestros servicios están cuidadosamente planificados, lo que garantiza los mejores resultados para ti.",
//     icon: "personas"
//   }, {
//     title: "Diseño en resina",
//     description: "Tendrás una sonrisa perfecta en una sola sesión, nuestra resina es de alta calidad y tiene una durabilidad de 3 a 5 años.",
//     icon: "doctor"
//   }, {
//     title: "Limpieza dental",
//     description: "Te brindaremos una limpieza profunda y precisa que eliminará la placa, el sarro y las manchas, dejando tus dientes limpios y relucientes",
//     icon: "silla"
//   }]


export const CardAboutUsFlex = () => {


    const screenUpper576 = useMediaQuery("(max-width:576px)");

    return (
        <div className={styles.flexAboutusSection}>
            <h1 className={styles.flexAboutusSectionTitle}>Acerca de nosotros</h1>
            <div className={styles.flexAboutusCards}>
                <div className={styles.cardAboutusSection}>
                    <Image src="/assets/ico-personas.svg" alt="Icono" width={screenUpper576 ? 60 : 80} height={screenUpper576 ? 60 : 80} />
                    <div className={styles.boxCardAboutusSection}>
                        <h2 className={styles.headerCardAboutusSection}>
                            ¿Qué somos?
                        </h2>
                        <Typography className={styles.textCardAboutusSection}>
                            Somos un grupo de expertos altamente capacitados en mejorar sonrisas y
                            devolverles la confianza para sonreír. Nos apasiona cuidar de tu salud bucal
                            por esta razón todos nuestros servicios están cuidadosamente planificados,
                            lo que garantiza los mejores resultados para ti.
                        </Typography>
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.cardAboutusSection}>
                    <Image src="/assets/ico-doctor.svg" alt="Icono" width={screenUpper576 ? 60 : 80} height={screenUpper576 ? 60 : 80} />
                    <div className={styles.boxCardAboutusSection}>
                        <h2 className={styles.headerCardAboutusSection}>
                            ¿Cuál es nuestra misión?
                        </h2>
                        <Typography className={styles.textCardAboutusSection}>
                            Ofrecemos atención personalizada en un ambiente agradable,
                            comprometidos con el bienestar y la satisfacción de nuestros clientes que
                            nos confían su mejor expresión, <strong>su sonrisa</strong>.
                        </Typography>
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.cardAboutusSection}>
                    <Image src="/assets/ico-silla.svg" alt="Icono" width={screenUpper576 ? 60 : 80} height={screenUpper576 ? 60 : 80} />
                    <div className={styles.boxCardAboutusSection}>
                        <h2 className={styles.headerCardAboutusSection}>
                            ¿A dónde queremos llegar?
                        </h2>
                        <Typography className={styles.textCardAboutusSection}>
                            Pretendemos ser referente a seguir dentro del sector, brindando el mejor
                            servicio y cumpliendo las expectativas a las personas que nos confian su
                            salud dental.
                        </Typography>
                    </div>
                </div>
            </div>
            <Button size="large">
                {" "}
                Conoce más{" "}
            </Button>
        </div>
    )
}