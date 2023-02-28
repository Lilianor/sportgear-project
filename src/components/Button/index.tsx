import styles from './Button.module.scss';

interface ButtonProps {
  title: string;
  className?: string;
  onClick: () => void;
}

export default function Button({ title, className, onClick }: ButtonProps) {
  const buttonClasses = `${styles.btn} ${className}`;

  return (
    <div className={buttonClasses} onClick={onClick}>
      {title}
    </div>
  );
}
