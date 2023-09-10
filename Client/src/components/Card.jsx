import React from 'react'


export const Card = ({name, fecha, puntaje, poster}) => {


  return (
    <div className='h-[200px] w-[150px] bg-fuchsia-400'>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="" />
      </div>

      <div>
        <p>{name}</p>
        <p>{fecha}</p>
        <p>{puntaje}</p>
      </div>
    </div>
  )
}
