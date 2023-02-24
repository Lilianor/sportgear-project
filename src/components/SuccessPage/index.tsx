import image from '../../assets/images/Adutor e Abdutor Evolution.jpg';
import styles from './SuccessPage.module.scss';

const success = [
  {
  id: 1,
  image: 'https://via.placeholder.com/250',
  alt: 'Adutor e Abdutor Evolution',
  name: 'Adutor e Abdutor Evolution',
  description: "Compra realizada com sucesso ;)"
  }
];

export default function SuccessList() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <img className={styles.image} src={image} alt="" />
        </div>
        <div className={styles.name}>
          <h3>Adutor e Abdutor Evolution</h3>
          <p>R$ 0.00</p>
        </div>
      </div>
      <div className={styles.description}>
        <div>
          <img className={styles.image} src={image} alt="" />
        </div>
        <div className={styles.name}>
          <h3>Adutor e Abdutor Evolution</h3>
          <p>R$ 0.00</p>
        </div>
      </div>
      <div className={styles.h1}>
        <h1>Compra realizada com Sucesso! :)</h1>
      </div>
    </main>
  );
}
