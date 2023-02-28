import { useState, useEffect } from 'react';
import Button from '../Button';
import Link from '../Link';
import styles from './Cart.module.scss';

const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Colocar nome aqui',
    name: 'Colocar nome aqui',
    price: 6000
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    alt: 'Colocar nome aqui',
    name: 'Colocar nome aqui',
    price: 7000
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    alt: 'Colocar nome aqui',
    name: 'Colocar nome aqui',
    price: 8000
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    alt: 'Colocar nome aqui',
    name: 'Colocar nome aqui',
    price: 9000
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/150',
    alt: 'Colocar nome aqui',
    name: 'Colocar nome aqui',
    price: 10000
  }
];

export default function Cart() {
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(products);

  const removeProduct = (productId: number) => {
    const updatedItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedItems);
    const newTotal = updatedItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  };

  useEffect(() => {
    const initialTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(initialTotal);
  }, [cartItems]);

  return (
    <main className={styles.shoppingCart}>
      <div className={styles.cart}>
        {cartItems.map(product => {
          const { id, image, alt, name, price } = product;
          return (
            <div key={id} className={styles.boxCart}>
              <div className={styles.img}>
                <img src={image} alt={alt} />
              </div>
              <div className={styles.text}>
                <h3>{name}</h3>
                <p>R$ {price}</p>
                <Button
                  title="Excluir"
                  className={styles.btnStyle}
                  onClick={() => removeProduct(id)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.price}>
        <div className={styles.sun}>
          <h1>Total</h1>
          <p>R$ {total.toFixed(2)}</p>
        </div>
        <div>
          <Link
            texto="Finalizar Compra"
            redirect="success"
            className={styles.btn}
          />
        </div>
        <div>
          <Link
            texto="Adicionar mais itens"
            redirect="/products"
            className={styles.btn}
          />
        </div>
      </div>
    </main>
  );
}
