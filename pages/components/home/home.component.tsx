import Head from "next/head";
import React from "react";
import styles from "../../../styles/Home.module.css";
import { useHome } from "./home.hook";

export const Home = () => {
  const { code, setCode, handleSubmit, errors, register, validateCode } =
    useHome();

  return (
    <div className={styles.container}>
      <Head>
        <title>Jordan & Gina | Wedding</title>
        <meta name="description" content="Wee " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the party</h1>

        <p className={styles.description}>Coming soon</p>
        {/* {errors && <p className={styles.error}>{errors}</p>} */}
        <input
          className={styles.input}
          placeholder="Enter your code..."
          value={code}
          {...register("code", {
            required: "Please enter your code",
            validate: validateCode,
          })}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
        />
        <button className={styles.button} onClick={handleSubmit}>
          Enter
        </button>
      </main>
    </div>
  );
};
