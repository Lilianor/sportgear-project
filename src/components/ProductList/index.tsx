//import image from '../../assets/images/Adutor e Abdutor Evolution.jpg';
import Link from '../Link';
import styles from './ProductList.module.scss';

const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/450',
    alt: 'Adutor e Abdutor Evolution',
    name: 'Adutor e Abdutor Evolution',
    description: `COMPRIMENTO (CM) ESTRUTURA: <br />
    LARGURA (CM):  <br />
    ALTURA (CM): 1m 60cm <br />
    PESO DO EQUIPAMENTO (KG): 100kg <br />
    ESTRUTURA: AÇO CARBONO <br />
    ESPESSURA CHAPA (MM): 3MM <br />
    PINTURA: ELETROSTÁTICA <br />
    SOLDA: MIG <br />
    ESTOFAMENTO: COSTURA DUPLA <br />
    REVESTIMENTO ESTOFAMENTO: NAPA NAVAL`
  }
];

export default function ProductList() {
  return (
    <div className={styles.container}>
      {products.map(product => {
        return (
          <>
            <div className="styles.image">
              <img src={product.image} alt="{product.alt}" />
            </div>
            <div className={styles.description}>
              <div>
                <h1>{product.name}</h1>
              </div>
              <div>
                <h3>DESCRIÇÃO:</h3>
              </div>
              <div>
                <p>
                  <div
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </p>
              </div>
              <div>
                <Link
                  texto="Adicionar ao carrinho"
                  redirect="cart"
                  className={styles.btn}
                />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
