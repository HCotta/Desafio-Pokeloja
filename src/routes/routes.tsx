import { Switch, Route } from 'react-router-dom';

import { DetalhesPokemon } from 'pages/DetalhesPokemon';
import { Home } from 'pages/Home';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}  />
      <Route path="/detalhes-pokemon/:id" component={DetalhesPokemon} />
    </Switch>
  );
};

