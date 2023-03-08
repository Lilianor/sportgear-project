import { useState, useEffect } from 'react';
import Button from '../Button';
import Link from '../Link';
import styles from './Cart.module.scss';

interface CartProduct {
  _id: number;
  images: string;
  alt: string;
  name: string;
  price: number;
}

export default function Cart() {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const localStorageItems = localStorage.getItem('cartProducts');
  const cartProducts = localStorageItems ? JSON.parse(localStorageItems) : [];

  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState<CartProduct[]>(cartProducts);

  const removeProduct = (productId: number) => {
    console.log(productId);
    const updatedItems = cartItems?.filter(item => item._id !== productId);

    setCartItems(updatedItems);
    localStorage.setItem('cartProducts', JSON.stringify(updatedItems));

    const newTotal = updatedItems.reduce(
      (acc, item) => acc + (item.price ?? 0),
      0
    );
    setTotal(newTotal);
  };

  const createOrder = () => {
    const orderItems = cartProducts.map((product: CartProduct) => ({
      productsId: product._id,
      amount: 1
    }));
    const data = { product: orderItems };
    // TODO: Adicionar o token abaixo para fazer o POST do pedido (/card)
    const token = 'SEU_TOKEN_DE_AUTORIZACAO';

    fetch(`${serverUrl}/card`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // TODO: Limpar o carrinho (se chegou aqui é pq deu bom)
      })
      .catch(error => {
        console.error(error);
        // TODO: Mandar uma mensagem de erro dizendo que deu ruim
      });
  };

  useEffect(() => {
    const initialTotal = cartItems.reduce(
      (acc, item) => acc + (item.price ?? 0),
      0
    );
    setTotal(initialTotal);
  }, [cartItems]);

  return (
    <main className={styles.shoppingCart}>
      <div className={styles.cart}>
        {cartItems.map(product => {
          const { _id, images, name, price } = product;
          return (
            <div key={_id} className={styles.boxCart}>
              <div className={styles.img}>
                <img
                  src={`${serverUrl}/images/product/${images}`}
                  alt=""
                />
              </div>
              <div className={styles.text}>
                <h3>{name}</h3>
                <p>R$ {price || '0.00'}</p>
                <Button
                  title="Excluir"
                  className={styles.btnStyle}
                  onClick={() => removeProduct(_id)}
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
            // TODO: depois de testar que o pedido está sendo cadastrado, descomentar a linha abaixo (para mandar para a pagina de sucesso)
            redirect="success"
            className={styles.btn}
            onClick={createOrder}
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