//import image from '../../assets/images/Adutor e Abdutor Evolution.jpg';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from '../Link';
import styles from './ProductsList.module.scss';

const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Colocar nome aqui',
    name: 'Colocar nome aqui',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Colocar nome aqui',
    name: 'Colocar nome aqui',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Colocar nome aqui',
    name: 'Colocar nome aqui',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Colocar nome aqui',
    name: 'Colocar nome aqui',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Colocar nome aqui',
    name: 'Colocar nome aqui',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Colocar nome aqui',
    name: 'Colocar nome aqui',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Colocar nome aqui',
    name: 'Colocar nome aqui',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Colocar nome aqui',
    name: 'Colocar nome aqui',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Colocar nome aqui',
    name: 'Colocar nome aqui',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Colocar nome aqui',
    name: 'Colocar nome aqui',
    price: 8000
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    alt: 'Colocar nome aqui',
    name: 'Colocar nome aqui',
    price: 8000
  },
];

export default function ProductsList() {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 10;
  const pagesCount = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const currentProducts = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

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
          {currentProducts.map(product => {
            return (
              <div className={styles.itemProduto}>
                <img
                  className={styles.image}
                  src={product.image}
                  alt={product.alt}
                />
                <h3> {product.name} </h3>
                <p>R$ {product.price}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.pagination}>
          <button onClick={handlePreviousPage} disabled={currentPage === 0}>
            <FaChevronLeft />
          </button>
          <span className={styles.span}>
            {currentPage + 1} de {pagesCount}
          </span>
          <button
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
