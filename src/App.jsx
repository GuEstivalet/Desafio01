import React from 'react';
import Home from "./Home";
import Produtos from './Produtos';
import Header from './Header';

//Root App, possui "Header" e conteúdo de "Home" ou "Produtos"
const App = () => {

  const {pathname} = window.location;
  let Pagina;
  if (pathname == '/Produtos') {
    Pagina = Produtos;
  }
  else {Pagina = Home;};

  return (
    <section>
      <Header/>
      <Pagina/>
    </section>
  );
};

export default App;
