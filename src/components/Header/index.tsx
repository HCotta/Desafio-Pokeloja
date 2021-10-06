import { Link } from "react-router-dom";
import logo from "assets/logo.svg";
import { Container, Content, IconeCart } from "./styles";
import { BuscaPokemon } from "./BuscaPokemon";
import { MdShoppingBasket } from "react-icons/md";
import { useGlobal } from 'hooks/useGlobal';

export function Header() {
  const { quantidadeTotalCarrinho } = useGlobal();

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="PokeLoja" />
          <h1> Mercado Pokemon </h1>
        </Link>
        <BuscaPokemon></BuscaPokemon>
        <IconeCart>
          <MdShoppingBasket size={36} title="Acesse sua cesta" />
          <span>{quantidadeTotalCarrinho}</span>
        </IconeCart>
      </Content>
    </Container>
  );
};
