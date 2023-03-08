import Link from "../Link";


import {
  
  Button
} from '@chakra-ui/react';
import Table from 'react-bootstrap/Table';
import styles from "./AdminPanel.module.scss";

export default function AdminPanel() {
  return (
    <main>
    <div className={styles.text}>
      <h1>Painel Administrativo</h1>
      <h3>Bem vindo, admin!</h3>
    </div>
    <div className={styles.links}>
      <Link texto="Produtos" redirect="/" className={styles.btn} />
      <Link texto="Categorias" redirect="/" className={styles.btn} />
      <Link texto="Clientes" redirect="/" className={styles.btn} />
      <Link texto="Pedidos" redirect="/" className={styles.btn} />
    </div>
    <div>
      <Button className={styles.btnstyle}> Cadastrar novo produto</Button>
    </div>

    <div className={styles.table}>
      <Table striped="columns" className={styles.responsiveTable}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th className={styles.actions}>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div className={styles.buttons}>
                <div className={styles.button}>
                  <button>Ver detalhes</button>
                </div>
                <div className={styles.button}>
                  <button>Excluir</button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div className={styles.buttons}>
                <button className={styles.button}>Ver detalhes</button>
                <button className={styles.button}>Excluir</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div className={styles.buttons}>
                <button className={styles.button}>Ver detalhes</button>
                <button className={styles.button}>Excluir</button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  </main>
  );
}