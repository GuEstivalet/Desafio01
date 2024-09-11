import React from 'react'

//Componente para aplicar o estilo em cada título
const Titulo = ({texto}) => {
  return (
    <h1 style={{color: 'green', fontSize: 40}}>{texto}</h1>
  )
}

export default Titulo
