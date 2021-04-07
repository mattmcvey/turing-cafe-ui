import React from 'react'
import ReservationsCard from '../ReservationsCard/ReservationsCard'

const Reservations = ({ reservations }) => {
  const reservationCard = reservations.map(reservation => {
    return (
      <ReservationsCard
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        guests={reservation.number}
        id={reservation.id}
        key={reservation.id}
      />
    )
  })
  return (
    <>
      {reservationCard}
    </>
  )
}

export default Reservations
