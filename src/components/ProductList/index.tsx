import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Link from '../Link';
import styles from './ProductList.module.scss';

interface Product {
  _id: string;
  images?: string;
  name: string;
  price: number;
  description?: string;
  categoryid?: string;
}

export default function ProductList() {
  const { id } = useParams();
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const [product, setProduct] = useState<Product>();

  const addToCart = () => {
    const storageProducts = JSON.parse(
      localStorage.getItem('cartProducts') || ''
    );
    storageProducts.push(product);
    localStorage.setItem('cartProducts', JSON.stringify(storageProducts));
  };

  const fetchProduct = async () => {
    fetch(`${serverUrl}/product/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className={styles.container}>
      <>
        {product && (
          <div className={styles.box}>
            <div className="styles.image">
              <img src={`${serverUrl}/images/product/${product.images}`} alt="" />
            </div>
            <div className={styles.description}>
              <div>
                <h1>{product.name}</h1>
              </div>
              <div>
                <h3>DESCRIÇÃO:</h3>
              </div>
              <div>
                <p>{product.description}</p>
              </div>
              <div>
                <Link
                  texto="Adicionar ao carrinho"
                  redirect="/cart"
                  className={styles.btn}
                  onClick={addToCart}
                />
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
}
