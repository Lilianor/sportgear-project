import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from '../Link';
import styles from './ProductsList.module.scss';

interface Product {
  _id: string;
  images?: string;
  name: string;
  price: number;
  description?: string;
  categoryid?: string;
}

export default function ProductsList() {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);

  const productsPerPage = 10;
  const pagesCount = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const currentProducts = products
    ? products.slice(
        currentPage * productsPerPage,
        (currentPage + 1) * productsPerPage
      )
    : [];

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
      <div className={styles.row}>
        <div className={styles.form}>
          <h5>LINHAS</h5>
          <div className={styles.formCheckItem}>
            <ul>
              <li>
                <Link texto="Evolution" redirect="/products" />
              </li>
            </ul>
            <ul>
              <li>
                <Link texto="Force" redirect="/products" />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.grid}>
          {products.length > 0 &&
            currentProducts.map(product => {
              return (
                <Link redirect={`/product/${product._id}`} key={product._id}>
                  <div className={styles.image}>
                    <img
                      title='product'
                      alt='Imagem do produto'
                      className={styles.image}
                      src={`${serverUrl}/images/product/${product.images}`}
                    />
                    <h3 className={styles.h3}> {product.name} </h3>
                    <p className={styles.p}>R$ {product.price}</p>
                  </div>
                </Link>
              );
            })}
        </div>
        <div className={styles.pagination}>
          <button title='icon' onClick={handlePreviousPage} disabled={currentPage === 0}>
            <FaChevronLeft />
          </button>
          <span className={styles.span}>
            {currentPage + 1} de {pagesCount}
          </span>
          <button
            title='icon'
            onClick={handleNextPage}
            disabled={currentPage === pagesCount - 1}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
