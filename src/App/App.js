import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => {
      this.setState({ reservations: data})
      console.log(this.state.reservations)
    })
  }

  addReservation = (newReservation) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReservation)
    })
    .then(response => response.json())
    .then(reservation => this.setState({ reservations: [...this.state.reservations, reservation]}))
  }

  cancelReservation = (id) => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE'
    })
    .then(reservation => {
      const filteredReservations = this.state.reservations.filter(reservation => reservation.id !== id)
      this.setState({ reservations: filteredReservations })
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} cancelReservation={this.cancelReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
