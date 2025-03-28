import { log } from "console";
import styles from "../../../styles/Home.module.css";
import { GetServerSideProps } from "next";
import { useEffect } from "react";

export const MainTemplate: React.FC = () => {
  useEffect(() => {
    window.location.assign("http://www.theknot.com/jordanandginainlove");
  }, []);
  return (
    <div className={styles.main}>
      <h5 className={styles.title}>Redirecting...</h5>
    </div>
  );
};
