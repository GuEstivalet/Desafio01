import React from 'react'

//Box estilizada de cada produto com nome e propriedades passados como propriedade
const Catalogo = ({nome, propriedades}) => {
  return (
    <div style={{border: '2px solid', margin: '1rem', padding: '1rem'}}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) =>(
            <li>{propriedade}</li>
        ))}
        
      </ul>
    </div>
  )
}

export default Catalogo