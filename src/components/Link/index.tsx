// import styles from "./Link.module.scss";

interface LinkProps {
  texto: string;
  redirect: string;
  openInANewTab?: boolean;
}

export default function Link({ texto, redirect, openInANewTab = false }: LinkProps) {
  return (
    <a href={redirect} target={openInANewTab ? '_blank' : ''} rel="noreferrer">
      {texto}
    </a>   
  )
}
