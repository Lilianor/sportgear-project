import styles from './Button.module.scss';

interface ButtonProps {
  title: string;
  className?: string;
}

export default function Button({ title, className }: ButtonProps) {
  const buttonClasses = `${styles.btn} ${className}`;

  return <div className={buttonClasses}>{title}</div>;
}
