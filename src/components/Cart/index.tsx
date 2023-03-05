import { useState, useEffect } from 'react';
import Button from '../Button';
import Link from '../Link';
import styles from './Cart.module.scss';

interface CartProduct {
  id: number;
  images: string;
  alt: string;
  name: string;
  price: number;
}

export default function Cart() {

  const localStorageItems = localStorage.getItem('cartProducts');
  const cartProducts = localStorageItems ? JSON.parse(localStorageItems) : [];

  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState<CartProduct[]>(cartProducts);

  const removeProduct = (productId: number) => {
    const updatedItems = cartItems?.filter(item => item.id !== productId);
    setCartItems(updatedItems);
    localStorage.setItem('cartProducts', JSON.stringify(updatedItems));
    const newTotal = updatedItems.reduce((acc, item) => acc + (item.price ?? 0), 0);
    setTotal(newTotal);
  };

  useEffect(() => {
    const initialTotal = cartItems.reduce((acc, item) => acc + (item.price ?? 0), 0);
    setTotal(initialTotal);
  }, [cartItems]);

  return (
    <main className={styles.shoppingCart}>
      <div className={styles.cart}>
        {cartItems.map(product => {
          const { id, images, alt, name, price } = product;
          return (
            <div key={id} className={styles.boxCart}>
              <div className={styles.img}>
                <img src={`http://localhost:5000/images/product/${images}`}  alt="" />
              </div>
              <div className={styles.text}>
                <h3>{name}</h3>
                <p>R$ {price || "0.00"}</p>
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
