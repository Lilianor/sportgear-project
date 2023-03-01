import Link from '../Link';
import styles from './RequestsPage.module.scss';

const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/250',
    alt: 'Colocar nome aqui',
    name: 'Colocar nome aqui',
    date: '00/00/0000',
    price: 10000
  }
];

export default function RequestsPage() {
  return (
    <div className={styles.container}>
      {products.map(product => {
        return (
          <>
            <div className={styles.box}>
              <div className="styles.image">
                <img src={product.image} alt="{product.alt}" />
              </div>
              <div className={styles.description}>
                <div>
                  <h1>{product.name}</h1>
                </div>
                <div>
                  <h3>PEDIDO REALIZADO EM: {product.date}</h3>
                </div>
                <div>
                  <h3>PEDIDO Nº {product.id} </h3>
                </div>
                <div>
                  <h3>TOTAL R$ {product.price} </h3>
                </div>
                <div>
                  <Link
                    texto="Comprar Novamente"
                    redirect="products"
                    className={styles.btn}
                  />
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className="styles.image">
                <img src={product.image} alt="{product.alt}" />
              </div>
              <div className={styles.description}>
                <div>
                  <h1>{product.name}</h1>
                </div>
                <div>
                  <h3>PEDIDO REALIZADO EM: {product.date}</h3>
                </div>
                <div>
                  <h3>PEDIDO Nº {product.id} </h3>
                </div>
                <div>
                  <h3>TOTAL R$ {product.price} </h3>
                </div>
                <div>
                  <Link
                    texto="Comprar Novamente"
                    redirect="products"
                    className={styles.btn}
                  />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
