import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from "./Index.module.css"
import { Typography } from '@mui/material'
import { ImgComparisonSlider } from '@img-comparison-slider/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const goToSection = (href) => {

    const target = document.getElementById(href);
    if (target) {
      const targetOffset = target.offsetTop;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }

  };

  return (
    <>
      <Head>
        <title>SDC</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.navbar}>
          <div className={styles.blogo}>
            <Typography>Hola</Typography>
          </div>
          <div className={styles.foptions}>
            <div className={styles.boptions}>
              <a color={'white'} href='#homeSection' onClick={goToSection}>Inicio</a>
            </div>
            <div className={styles.boptions}>
              <a color={'white'} href='#procSection' onClick={goToSection}>Procedimientos</a>
            </div>
            <div className={styles.boptions}>
              <a color={'white'} href='#auSection' onClick={goToSection}>Acerca de nosotros</a>
            </div>
            <div className={styles.boptions}>
              <a color={'white'} href='#casesSection' onClick={goToSection}>Casos de éxito</a>
            </div>
          </div>
        </div>
        <div id='homeSection' className={styles.bsection}>
          <div className={styles.boxexam}></div>
        </div>
        <div id='procSection' className={styles.bsection}></div>
        <div id='auSection' className={styles.bsection}></div>
        <div id='casesSection' className={styles.ausection}>
          <div className={styles.bslider}>
            <ImgComparisonSlider>
              <div slot="first" className={styles.box1}></div>
              <div slot="second" className={styles.box2}></div>
            </ImgComparisonSlider>
            <ImgComparisonSlider>
              <div slot="first" className={styles.box1}></div>
              <div slot="second" className={styles.box2}></div>
            </ImgComparisonSlider>
            <ImgComparisonSlider>
              <div slot="first" className={styles.box1}></div>
              <div slot="second" className={styles.box2}></div>
            </ImgComparisonSlider>
          </div>
        </div>
      </main>
    </>
  )
}
