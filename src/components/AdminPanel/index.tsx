import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Input,
  useToast,
  Spinner,
  Flex,
  ModalCloseButton,
  FormControl,
  FormLabel
} from '@chakra-ui/react';
import Table from 'react-bootstrap/Table';
import Link from '../Link';
import styles from './AdminPanel.module.scss';

interface CategoryProps {
  category: 'product' | 'category' | 'user' | 'card';
}

function translateCategory(category: any) {
  if (category === 'product') return 'Produto';
  if (category === 'category') return 'Categoria';
  if (category === 'user') return 'Cliente';
  if (category === 'card') return 'Pedido';
}

export default function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<CategoryProps['category']>('product');

  // const fetchUrl = `http://localhost:5000/${activeCategory}`;

  return (
    <main>
      <div className={styles.text}>
        <h1>Painel Administrativo</h1>
        <h3>Bem vindo, admin!</h3>
      </div>
      <div className={styles.links}>
        <button
          onClick={() => setActiveCategory('product')}
          className={`${styles.btn} ${
            activeCategory === 'product' && styles.activeButton
          }`}
        >
          Produtos
        </button>
        <button
          onClick={() => setActiveCategory('category')}
          className={`${styles.btn} ${
            activeCategory === 'category' && styles.activeButton
          }`}
        >
          Categorias
        </button>
        <button
          onClick={() => setActiveCategory('user')}
          className={`${styles.btn} ${
            activeCategory === 'user' && styles.activeButton
          }`}
        >
          Clientes
        </button>
        <button
          onClick={() => setActiveCategory('card')}
          className={`${styles.btn} ${
            activeCategory === 'card' && styles.activeButton
          }`}
        >
          Pedidos
        </button>
      </div>
      <div>
        <Button className={styles.btnstyle} onClick={() => setIsOpen(true)}>
          Cadastrar {translateCategory(activeCategory)}
        </Button>
      </div>

      <div className={styles.table}>
        <Table striped="columns" className={styles.responsiveTable}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th className={styles.actions}>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div className={styles.buttons}>
                  <div className={styles.button}>
                    <button>Editar</button>
                  </div>
                  <div className={styles.button}>
                    <button>Excluir</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div className={styles.buttons}>
                  <button className={styles.button}>Editar</button>
                  <button className={styles.button}>Excluir</button>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div className={styles.buttons}>
                  <button className={styles.button}>Editar</button>
                  <button className={styles.button}>Excluir</button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Criar Cadastro</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              
              <Input className={styles.input} placeholder="Id" />
            </FormControl>

            <FormControl mt={4}>
              
              <Input className={styles.input} placeholder="Nome" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Salvar
            </Button>
            <Button onClick={() => setIsOpen(false)}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </main>
  );
}
