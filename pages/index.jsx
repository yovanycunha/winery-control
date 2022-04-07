import Container from '../components/Container/Container';
import Input from '../components/Input/Input';

export default function Home() {
  return (
    <Container>
      <div>
        <Input
          type="text"
          name="Insumo"
          placeholder="Informe o nome do Insumo"
        />
      </div>
    </Container>
  );
}
