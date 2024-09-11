import React from 'react';

//Header que contém os links para acessar as páginas "Home" e "Produtos"
const Header = () => {
  return (
    <header>
        <ul>
            <li><a href="./Home">Home</a></li>
            <li><a href="./Produtos">Produtos</a></li>
        </ul>
    </header>
  );
};

export default Header;
