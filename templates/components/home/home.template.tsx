import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import { FC } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

type Props = {
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  validateCode: (data: string) => boolean;
  onSubmit: () => void;
};

export const Home: FC<Props> = ({
  handleSubmit,
  errors,
  register,
  validateCode,
  onSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.main}>
      <p className={styles.title}>Welcome to the party</p>
      <p className={styles.description}>Coming soon</p>
      {errors?.code && (
        <p className={styles.error}>{errors.code.message as string}</p>
      )}
      <input
        className={styles.input}
        placeholder="Enter your code..."
        {...register("code", {
          required: "Please enter your code",
          validate: (e) => validateCode(e) || "Invalid code",
        })}
        autoComplete="off"
      />
      <button className={styles.button} type="submit">
        Enter
      </button>
    </form>
  );
};
