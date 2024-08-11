import type { DetailedHTMLProps, FormHTMLAttributes } from "react";
import styles from "./index.module.css";

interface FormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

export const Form = ({ ...restProps }: FormProps) => (
  <form {...restProps} className={styles.form}>
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor="user_name">
        Name
      </label>
      <input type="text" id="user_name" name="user_name" required />
    </div>
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor="email">
        Email
      </label>
      <input type="email" id="email" name="email" required />
    </div>
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor="message">
        Message
      </label>
      <textarea rows={8} id="message" name="message" required />
    </div>
    <button className={styles.button} type="submit">
      Send
    </button>
  </form>
);
