import React from 'react'

export function CateCard({categoria}) {
  return (
    <div>
                <h1>{categoria.nombre}</h1>
                <h3>{categoria.descripcion}</h3>
                <hr />
    </div>
  )
}
