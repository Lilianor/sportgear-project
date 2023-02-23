import styles from "./Button.module.scss";

interface ButtonProps {
  title: string;
}

export default function Button({title}: ButtonProps) {
  return (
    <div className={styles.button}>
      {title}
    </div>
  );
}