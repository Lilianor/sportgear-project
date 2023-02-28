import Link from '../Link';
import Card from 'react-bootstrap/Card';
//import image from "../../assets/images/Adutor e Abdutor Evolution.jpg";
import styles from './HomeProducts.module.scss';

const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/250',
    name: 'Colocar nome aqui'
  }
];

export default function HomeProducts() {
  return (
    <section className={styles.sectionCards}>
      <div className={styles.h1}>
        <h1>Nossos Produtos</h1>
      </div>
      <div className={styles.boxWrapper}>
        {products.map(product => {
          return (
            <>
              <div className={styles.container}>
                <Card>
                  <Card.Img
                    className={styles.cardImage}
                    src={product.image}
                  />
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>
                      {product.name}
                    </Card.Title>
                    <Link
                      texto="Saiba mais"
                      redirect="products"
                      className={styles.btn}
                    />
                  </Card.Body>
                </Card>
              </div>
              <div className={styles.container}>
                <Card>
                  <Card.Img
                    className={styles.cardImage}
                    src={product.image}
                  />
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>
                      {product.name}
                    </Card.Title>
                    <Link
                      texto="Saiba mais"
                      redirect="products"
                      className={styles.btn}
                    />
                  </Card.Body>
                </Card>
              </div>
              <div className={styles.container}>
                <Card>
                  <Card.Img
                    className={styles.cardImage}
                    src={product.image}
                  />
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>
                      {product.name}
                    </Card.Title>
                    <Link
                      texto="Saiba mais"
                      redirect="products"
                      className={styles.btn}
                    />
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}
