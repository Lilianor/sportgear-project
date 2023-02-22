import image from "../../assets/images/Adutor e Abdutor Evolution.jpg";
import styles from "./ProductList.module.scss";

export default function ProductList() {
  return (
    <div className={styles.container}>
      <div className="styles.image">
        <img src={image} alt="" />
      </div>
      <div className={styles.description}>
        <div><h1>Adutor e Abdutor Evolution</h1></div>
        <div><h3>DESCRIÇÃO:</h3></div>
        <div><p> COMPRIMENTO (CM) 
            ESTRUTURA: <br />
            LARGURA (CM): <br />
            ALTURA (CM): <br />
            PESO DO EQUIPAMENTO (KG): <br />
            ESTRUTURA:   AÇO CARBONO <br />
            ESPESSURA CHAPA (MM): 3MM <br />
            PINTURA: ELETROSTÁTICA <br />
            SOLDA: MIG <br />
            ESTOFAMENTO:  COSTURA DUPLA <br />
            REVESTIMENTO ESTOFAMENTO: NAPA NAVAL</p></div>
          <div>
            <button className={styles.buttom} type="submit">Adicionar ao carrinho</button>
          </div>
      </div>
    </div>
  )
}