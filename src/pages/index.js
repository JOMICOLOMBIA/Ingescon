import Head from "next/head";
import { MainPage } from "@/components/MainPage";

import { Suspense } from "react";

import NoSSR from "react-no-ssr";
import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";
import { BotonFlotante } from "@/components/Layout/BotonFlotante";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <Suspense>
      <Head>
        <title>INGES</title>
        <meta
          name="description"
          content="Descubre cómo una consultoría excepcional puede impulsar tus proyectos de ingeniería. En Inges Consultoría, estamos comprometidos a ser tu aliado en el camino hacia el éxito. ¡Agenda una consulta hoy mismo!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.png"  />
      </Head>
      <main>
        <NoSSR>
          <Navbar />
          <MainPage />
          <BotonFlotante />
          <Footer />
          <ToastContainer />
        </NoSSR>
      </main>
    </Suspense>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {}, // Deshabilitar SSR para esta página
  };
};

export default Home;