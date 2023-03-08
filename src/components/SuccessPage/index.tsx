import styles from './SuccessPage.module.scss';

interface CartProduct {
  id: number;
  images: string;
  alt: string;
  name: string;
  price: number;
}

export default function SuccessPage() {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const localStorageItems = localStorage.getItem('cartProducts');
  const cartProducts = localStorageItems ? JSON.parse(localStorageItems) : [];

  return (
    <main className={styles.main}>
      <div className={styles.h1}>
        <h1>Compra realizada com sucesso ;)</h1>
      </div>
      <div className={styles.description}>
        {cartProducts.map((product: CartProduct) => {
          return (
            <div className={styles.box} key={product.id}>
              <div>
                <img
                  className={styles.images}
                  src={`${serverUrl}/images/product/${product.images}`}
                  alt={product.alt}
                />
              </div>
              <div className={styles.name}>
                <h3>{product.name}</h3>
                <p>R$ {product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}