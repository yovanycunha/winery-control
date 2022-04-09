import Container from '../components/Container/Container';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

import styles from './Home/Home.module.scss';

export default function Home() {
  const containerClass = [styles.container];
  return (
    <Container className={containerClass.join(' ')}>
      <h2 className={styles.title}>Cadastro de Insumos</h2>

      <div className={styles.inputsContainer}>
        <div className={styles.inputName}>
          <Input type="text" name="insumo" placeholder="Nome" />
        </div>
        <div className={styles.inputValues}>
          <Input
            type="number"
            name="insumo-quantidade"
            placeholder="Quantidade"
          />
          <Input type="number" name="insumo-valor" placeholder="Valor total" />
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.inputsContainer}>
        <div className={styles.inputName}>
          <Input type="text" name="insumo" placeholder="Nome" />
        </div>
        <div className={styles.inputValues}>
          <Input
            type="number"
            name="insumo-quantidade"
            placeholder="Quantidade"
          />
          <Input type="number" name="insumo-valor" placeholder="Valor total" />
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.inputsContainer}>
        <div className={styles.inputName}>
          <Input type="text" name="insumo" placeholder="Nome" />
        </div>
        <div className={styles.inputValues}>
          <Input
            type="number"
            name="insumo-quantidade"
            placeholder="Quantidade"
          />
          <Input type="number" name="insumo-valor" placeholder="Valor total" />
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.inputsContainer}>
        <div className={styles.inputName}>
          <Input type="text" name="insumo" placeholder="Nome" />
        </div>
        <div className={styles.inputValues}>
          <Input
            type="number"
            name="insumo-quantidade"
            placeholder="Quantidade"
          />
          <Input type="number" name="insumo-valor" placeholder="Valor total" />
        </div>
      </div>

      <Button>ENVIAR</Button>
    </Container>
  );
}
