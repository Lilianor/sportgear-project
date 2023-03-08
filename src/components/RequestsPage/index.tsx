import { useState, useEffect } from 'react';
import Link from '../Link';
import styles from './RequestsPage.module.scss';

interface Product {
  _id: string;
  images?: string;
  name: string;
  price: number;
  description?: string;
  categoryid?: string;
  date: '00/00/0000';
}

export default function RequestsPage() {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    fetch(`${serverUrl}/product`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      {products.map(product => {
        return (
          <div className={styles.box}>
            <div className="styles.image">
              <img src={`${serverUrl}/images/product/${product.images}`} alt={product.name} />
            </div>
            <div className={styles.description}>
              <div>
                <h1>{product.name}</h1>
              </div>
              <div>
                <h3>PEDIDO REALIZADO EM: {product.date}</h3>
              </div>
              <div>
                <h3>PEDIDO Nº {product._id} </h3>
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
        );
      })}
    </div>
  );
}