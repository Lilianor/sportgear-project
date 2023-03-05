import { useState } from 'react';
import logo from '../../assets/images/SportGear.png';
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiAlignJustify
} from 'react-icons/fi';
import Link from '../Link';
import styles from './Header.module.scss';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const storageProducts = JSON.parse(
    localStorage.getItem('cartProducts') || ''
  );
  const totalProductsInCart = storageProducts.length;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <Link redirect="/">
            <img className={styles.logo} src={logo} alt="" />
          </Link>
        </div>
        <div className={styles.linksWrapper}>
          <Link texto="Produtos" redirect="/products" />
          <Link texto="Sobre" redirect="/sobre" />
        </div>

        <nav className={styles.navWrapper}>
          <ul className={styles.iconsWrapper}>
            <li>
              <a href=".">
                <FiSearch />
              </a>
            </li>
            <li>
              <a href="/cart" className={styles.countWrapper}>
                <FiShoppingCart />
                {totalProductsInCart > 0 && (
                  <span className={styles.cartItemCount}>
                    {totalProductsInCart}
                  </span>
                )}
              </a>
            </li>
            <li>
              <a href="/login">
                <FiUser />
              </a>
            </li>
          </ul>
          <ul className={styles.iconsWrapperMobile}>
            <li
              onClick={() => {
                setShowMobileMenu(!showMobileMenu);
              }}
            >
              <FiAlignJustify />
            </li>
          </ul>
        </nav>
      </header>
      {showMobileMenu && (
        <div className={styles.mobileMenu}>
          <ul>
            <li>
              <Link texto="Produtos" redirect="/loja" />
            </li>
            <li>
              <Link texto="Sobre" redirect="/sobre" />
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
