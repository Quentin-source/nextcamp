import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

const Home = (props) => {

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tutoriel Next.Js</title>
      </Head>
      <div className={styles.container}>
        <h1>Bienvenue!</h1>
      </div>
    </>
  );
};

export default Home;
