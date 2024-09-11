import React from 'react';
import Header from "./Header";
import Titulo from "./Titulo";

//Página "Home" apresenta título e descrição
const Home = () => {
  return (
    <section>
        <Titulo texto="Home"/>
        <h2>Essa é a Home page.</h2>
    </section>
  );
};

export default Home;
