import React from 'react'

export const Small = React.memo(( {value} ) => {

  console.log('Me volví a mostrar.');

  return (
    <small> { value } </small>
  )
});

// Memo nos sirve para memorizar un componente y no
// volver a renderizarlo si sus properties no cambian