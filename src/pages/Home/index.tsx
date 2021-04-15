import { ListaPokemon } from 'components/ListaPokemon'
import { Carrinho } from 'components/Carrinho';

export function Home() {
  return (
    <main>
      <ListaPokemon></ListaPokemon>
      <Carrinho />
    </main>
  )
}