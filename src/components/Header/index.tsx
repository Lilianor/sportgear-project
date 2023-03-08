import { useState, useEffect } from 'react';
import logo from '../../assets/images/SportGear.png';
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiAlignJustify
} from 'react-icons/fi';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button
} from '@chakra-ui/react';
import Link from '../Link';
import styles from './Header.module.scss';

interface HeaderProps {
  isAdmin?: boolean;
}

export default function Header({ isAdmin = false }: HeaderProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const loggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const storageProducts = JSON.parse(
    localStorage.getItem('cartProducts') || ''
  );
  const totalProductsInCart = storageProducts.length;

  const [isOpen, setIsOpen] = useState(false);

  const handleLoginClick = () => {
    setIsOpen(true);
  };

  const RegularHeader = () => {
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
                <a onClick={handleLoginClick}>
                  <FiUser />
                  <span>
                    {loggedIn ? 'Minha conta' : ' Faça seu login '}
                    <br />
                    <span className={styles.span}>{' ou cadastre-se'}</span>
                  </span>
                </a>
              </li>
              <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Já possui uma conta?</ModalHeader>
                  <ModalBody>
                    <form>
                      <label htmlFor="email">E-mail</label>
                      <input
                        className={styles.input}
                        type="email"
                        id="email"
                      />{' '}
                      <br />
                      <label htmlFor="password">Senha</label>
                      <input
                        className={styles.input}
                        type="password"
                        id="password"
                      />
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      colorScheme="green"
                      w="100%"
                      onClick={() => console.log('Criar cadastro')}
                    >
                      Entrar
                    </Button>
                  </ModalFooter>
                  <ModalHeader>Ainda não é cadastrado?</ModalHeader>
                  <ModalFooter>
                    <Button
                      colorScheme="green"
                      w="100%"
                      onClick={() => console.log('Criar cadastro')}
                    >
                      Criar cadastro
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
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
  };

  const AdminHeader = () => {
    return (
      <>
        <header className={styles.header}>
          <div className={styles.logoWrapper}>
            <Link redirect="/">
              <img className={styles.logo} src={logo} alt="" />
            </Link>
          </div>
          <nav className={styles.navWrapper}>
            <ul className={styles.iconsWrapper}>
              <li>Painel Administrativo</li>
              <li>
                <a href="/logout">Sair</a>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  };

  return <>{isAdmin ? <AdminHeader /> : <RegularHeader />}</>;
}
