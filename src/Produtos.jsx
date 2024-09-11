import React from 'react';
import Catalogo from './Catalogo';
import Titulo from "./Titulo";

//Página "Produtos" apresenta os produtos
const Produtos = () => {

    const produtos = [ 
        {nome: 'Notebook', propriedades:['16 GB RAM', '512 GB']},
        {nome: 'Smartphone', propriedades: ['2GB RAM', '128GB']}
    ];

  return (
    <section>
        <Titulo texto="Produtos"/>
        {produtos.map((produto) => (
            <Catalogo key={produto.nome} {...produto}/>
        ))}
        
    </section>
  );
};

export default Produtos;
