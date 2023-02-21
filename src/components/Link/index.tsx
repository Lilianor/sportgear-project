// import styles from "./Link.module.scss";

interface LinkProps {
  texto: string;
  redirect: string;
}

export default function Link({ texto, redirect }: LinkProps) {
  return (
    <a href={redirect} target="_blank" rel="noreferrer">
      {texto}
    </a>   
  )
}
