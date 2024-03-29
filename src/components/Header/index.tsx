// Styles
import { Container, Logo } from "./styles";

// Assets
import PokedexIcon from "../../../public/pokedex.svg";

export function Header() {
  return (
    <Container>
      <Logo src={PokedexIcon} />
      <h1>Pokedex</h1>
    </Container>
  );
}
