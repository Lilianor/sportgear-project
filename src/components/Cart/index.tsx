import Button from '../Button';
import Link from '../Link';
import styles from './Cart.module.scss';

const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Adutor e Abdutor Evolution',
    name: 'Adutor e Abdutor Evolution',
    price: 8000
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    alt: 'Cross Over Clássico Evolution',
    name: 'Cross Over Clássico Evolution',
    price: 10000
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    alt: 'Cross Over Clássico Evolution',
    name: 'Cross Over Clássico Evolution',
    price: 10000
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    alt: 'Cross Over Clássico Evolution',
    name: 'Cross Over Clássico Evolution',
    price: 10000
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    alt: 'Cross Over Clássico Evolution',
    name: 'Cross Over Clássico Evolution',
    price: 10000
  }
];

export default function Cart() {
  return (
    <main className={styles.shoppingCart}>
      <div className={styles.cart}>
        {products.map(product => {
          return (
            <div className={styles.boxCart}>
              <div className={styles.img}>
                <img src={product.image} alt={product.alt} />
              </div>
              <div className={styles.text}>
                <h3>{product.name}</h3>
                <p>R$ {product.price}</p>
                <Button
                title="Excluir"
                className={styles.btnStyle}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.price}>
        <div className={styles.sun}>
          <h1>Total</h1>
          <p>R$ 0.00</p>
        </div>
        <div>
          <Link texto="Finalizar Compra" redirect="success" className={styles.btn} />
        </div>
        <div>
          <Link texto="Adicionar mais itens" redirect="/products" className={styles.btn} />
        </div>
      </div>
    </main>
  );
}
