import React, { Component } from 'react'
import axios from 'axios'

import '../css/Form.css';

export default class Form extends Component {
  constructor() {
    super()
    
    this.state = {
      city: "",
      checkIn: "",
      checkOut: "",
      hotelArray: []
    }

  }
  
  handleCityChange = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  handleCheckInChange = (e) => {
    this.setState({
      checkIn: e.target.value
    })
  }

  handleCheckOutChange = (e) => {
    this.setState({
      checkOut: e.target.value
    })
  }

  componentDidMount = async () => {
    
    // this.submitSearch()
  }
  submitSearch = async (e) => {
    e.preventDefault();
    const url = `http://engine.hotellook.com/api/v2/cache.json?location=${this.state.city}&checkIn=${this.state.checkIn}&checkOut=${this.state.checkOut}&currency=usd&limit=10&token=52f750a3f26ab5edeadc822d21a36d69`
    const hotels = await axios(url)
    // console.log(hotels.data)
    this.props.reservation(hotels.data)
    console.log(this.state.hotelArray)
  } 

  

  render() {
    
    return (
      <div>
        
        <form>
          <input type="text" placeholder="City" onChange={this.handleCityChange}/>
          <input type="date" placeholder="Check-in" onChange={this.handleCheckInChange}/>
          <input type="date" placeholder="Check-out" onChange={this.handleCheckOutChange}/>
          <button onClick={this.submitSearch}>Submit</button>
        </form>

      </div>
    )
  }
}
