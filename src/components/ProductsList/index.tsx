import image from '../../assets/images/Adutor e Abdutor Evolution.jpg';
import Link from '../Link';
import styles from './ProductsList.module.scss';

export default function ProductsList() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.form}>
          <h5>LINHAS</h5>
          <div className={styles.formCheckItem}>
            <ul>
              <li>
                <Link texto="Evolution" redirect="/products" />
              </li>
            </ul>
            <ul>
              <li>
                <Link texto="Force" redirect="/products" />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.itemProduto}>
            <img className={styles.image} src={image} alt="" />
            <h3 className={styles.h3}>Adutor e Abdutor Evolution</h3>
            <p>R$ 8.000</p>
          </div>
          <div className={styles.itemProduto}>
            <img className={styles.image} src={image} alt="" />
            <h3 className={styles.h3}>Adutor e Abdutor Evolution</h3>
            <p>R$ 8.000</p>
          </div>{' '}
          <div className={styles.itemProduto}>
            <img className={styles.image} src={image} alt="" />
            <h3 className={styles.h3}>Adutor e Abdutor Evolution</h3>
            <p>R$ 8.000</p>
          </div>
          <div className={styles.itemProduto}>
            <img className={styles.image} src={image} alt="" />
            <h3 className={styles.h3}>Adutor e Abdutor Evolution</h3>
            <p>R$ 8.000</p>
          </div>
          <div className={styles.itemProduto}>
            <img className={styles.image} src={image} alt="" />
            <h3 className={styles.h3}>Adutor e Abdutor Evolution</h3>
            <p>R$ 8.000</p>
          </div>
          <div className={styles.itemProduto}>
            <img className={styles.image} src={image} alt="" />
            <h3 className={styles.h3}>Adutor e Abdutor Evolution</h3>
            <p>R$ 8.000</p>
          </div>
          <div className={styles.itemProduto}>
            <img className={styles.image} src={image} alt="" />
            <h3 className={styles.h3}>Adutor e Abdutor Evolution</h3>
            <p>R$ 8.000</p>
          </div>
          <div className={styles.itemProduto}>
            <img className={styles.image} src={image} alt="" />
            <h3 className={styles.h3}>Adutor e Abdutor Evolution</h3>
            <p>R$ 8.000</p>
          </div>
          <div className={styles.itemProduto}>
            <img className={styles.image} src={image} alt="" />
            <h3 className={styles.h3}>Adutor e Abdutor Evolution</h3>
            <p>R$ 8.000</p>
          </div>
          <div className={styles.itemProduto}>
            <img className={styles.image} src={image} alt="" />
            <h3 className={styles.h3}>Adutor e Abdutor Evolution</h3>
            <p>R$ 8.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
