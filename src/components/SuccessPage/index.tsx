import image from '../../assets/images/Adutor e Abdutor Evolution.jpg';
import styles from './SuccessPage.module.scss';

const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/250',
    alt: 'Colocar nome aqui',
    name: 'Colocar nome aqui',
    price: 8000
  }
];

export default function SuccessPage() {
  return (
    <main className={styles.main}>
      <div className={styles.h1}>
        <h1>Compra realizada com sucesso ;)</h1>
      </div>

      {products.map(product => {
        return (
          <>
            <div className={styles.description}>
              <div className={styles.box}>
                <div>
                  <img
                    className={styles.image}
                    src={product.image}
                    alt={product.alt}
                  />
                </div>
                <div className={styles.name}>
                  <h3>{product.name}</h3>
                  <p>R$ {product.price}</p>
                </div>
              </div>
              <div className={styles.box}>
                <div>
                  <img
                    className={styles.image}
                    src={product.image}
                    alt={product.alt}
                  />
                </div>
                <div className={styles.name}>
                  <h3>{product.name}</h3>
                  <p>R$ {product.price}</p>
                </div>
              </div>
              <div className={styles.box}>
                <div>
                  <img
                    className={styles.image}
                    src={product.image}
                    alt={product.alt}
                  />
                </div>
                <div className={styles.name}>
                  <h3>{product.name}</h3>
                  <p>R$ {product.price}</p>
                </div>
              </div>
              <div className={styles.box}>
                <div>
                  <img
                    className={styles.image}
                    src={product.image}
                    alt={product.alt}
                  />
                </div>
                <div className={styles.name}>
                  <h3>{product.name}</h3>
                  <p>R$ {product.price}</p>
                </div>
              </div>
              <div className={styles.box}>
                <div>
                  <img
                    className={styles.image}
                    src={product.image}
                    alt={product.alt}
                  />
                </div>
                <div className={styles.name}>
                  <h3>{product.name}</h3>
                  <p>R$ {product.price}</p>
                </div>
              </div>
              <div className={styles.box}>
                <div>
                  <img
                    className={styles.image}
                    src={product.image}
                    alt={product.alt}
                  />
                </div>
                <div className={styles.name}>
                  <h3>{product.name}</h3>
                  <p>R$ {product.price}</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </main>
  );
}
