import React, { Component } from 'react'


class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = event => {
    this.setState( { [event.target.name]: event.target.value })
  }

  makeReservation = event => {
    event.preventDefault()
    const { name, date, time, number } = this.state
    const newReservation = {
      id: Date.now(),
      name,
      date,
      time,
      number: Number(number)
    }
    this.props.addReservation(newReservation)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: ''})
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          type='text'
          placeholder='Date (mm/dd)'
          name='date'
          value={this.state.date}
          onChange={this.handleChange}
        />

        <input
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={this.handleChange}
        />

        <input
          type='number'
          placeholder='Number of guests'
          name='number'
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button onClick={this.makeReservation}>Make Reservation</button>
      </form>
    )
  }
}

export default Form
