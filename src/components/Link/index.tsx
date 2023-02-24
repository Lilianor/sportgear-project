// import styles from "./Link.module.scss";

interface LinkProps {
  texto: string;
  redirect: string;
  openInANewTab?: boolean;
  className?: string;
}

export default function Link({ texto, redirect, openInANewTab, className = '' }: LinkProps) {
  return (
    <a
      href={redirect}
      target={openInANewTab ? '_blank' : ''}
      rel="noreferrer"
      className={className}
    >
      {texto}
    </a>
  )
}
