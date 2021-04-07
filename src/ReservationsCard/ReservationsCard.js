import React from 'react'
import './ReservationsCard.css'

const ReservationsCard = ({ name, date, time, guests, id }) => {
  return (
    <article className='card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of Guests: {guests}</p>
      <button>Cancel</button>
    </article>
  )
}

export default ReservationsCard
