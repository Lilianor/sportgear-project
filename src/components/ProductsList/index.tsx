//import image from '../../assets/images/Adutor e Abdutor Evolution.jpg';
import Link from '../Link';
import styles from './ProductsList.module.scss';

const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Adutor e Abdutor Evolution',
    name: 'Adutor e Abdutor Evolution',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Adutor e Abdutor Evolution',
    name: 'Adutor e Abdutor Evolution',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Adutor e Abdutor Evolution',
    name: 'Adutor e Abdutor Evolution',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Adutor e Abdutor Evolution',
    name: 'Adutor e Abdutor Evolution',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Adutor e Abdutor Evolution',
    name: 'Adutor e Abdutor Evolution',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Adutor e Abdutor Evolution',
    name: 'Adutor e Abdutor Evolution',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Adutor e Abdutor Evolution',
    name: 'Adutor e Abdutor Evolution',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Adutor e Abdutor Evolution',
    name: 'Adutor e Abdutor Evolution',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Adutor e Abdutor Evolution',
    name: 'Adutor e Abdutor Evolution',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Adutor e Abdutor Evolution',
    name: 'Adutor e Abdutor Evolution',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Adutor e Abdutor Evolution',
    name: 'Adutor e Abdutor Evolution',
    price: 8000
  }
  
];

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
          {products.map(product => {
            return (
              <div className={styles.itemProduto}>
                <img
                  className={styles.image}
                  src={product.image}
                  alt={product.alt}
                />
                <h3> {product.name} </h3>
                <p>R$ {product.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
