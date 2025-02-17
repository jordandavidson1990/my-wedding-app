import Head from "next/head";
import styles from "../styles/Home.module.css";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jordan & Gina | Wedding</title>
        <meta name="description" content="Wee " />
        <link rel="icon" href="/wedding-bells.svg" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
