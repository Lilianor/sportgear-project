import { useState, useEffect } from 'react';
import styles from './RequestsPage.module.scss';

interface Product {
  description: string;
  name: string;
  price: number;
  images: string;
}

interface OrdersProducts {
  _id: string;
  amount: number;
  date: string;
  productsId: Product;
}

interface Order {
  _id: string;
  priceTotal: number;
  OrdersProductId: [OrdersProducts];
}

export default function RequestsPage() {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const userId = localStorage.getItem('userId');
  const [orders, setOrders] = useState<Order[]>([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${serverUrl}/card/user/${userId}`);
      const data = await response.json();
      console.log(data);
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className={styles.container}>
      {orders.map(order => {
        return (
          <div className={styles.box}>
            <div className={styles.description}>
              <div>
                <h5 className={styles.h5}>PEDIDO Nº {order._id} </h5>
              </div>
              {order.OrdersProductId.map(orderProduct => (
                <div>
                  <div className={styles.images}>
                    <img
                      src={`${serverUrl}/images/product/${orderProduct.productsId.images}`}
                      alt={orderProduct.productsId.name}
                    />
                  </div>
                  <div className={styles.text}>
                    {' '}
                    <h3 className={styles.h3}>NOME: {orderProduct.productsId.name}</h3>
                    <h3 className={styles.h3}>QTD: {orderProduct.amount}</h3>
                    <h3 className={styles.h3}>
                      DATA:{' '}
                      {new Date(orderProduct.date).toLocaleString('en-GB')}
                    </h3>
                    <h3 className={styles.h3}>R$ {orderProduct.productsId.price}</h3>
                  </div>
                </div>
              ))}
              <div>
                <h2 className={styles.h2}>TOTAL R$ {order.priceTotal}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
