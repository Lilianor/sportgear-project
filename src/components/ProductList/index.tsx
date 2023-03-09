import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
  const navigate = useNavigate();

  const addToCart = () => {
    const storageProducts = localStorage.getItem('cartProducts');
    const cartProducts = storageProducts ? JSON.parse(storageProducts) : [];
    cartProducts.push(product);
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    navigate('/cart');
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
                <button className={styles.btn} onClick={() => addToCart()}>Adicionar ao carrinho</button>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
}
