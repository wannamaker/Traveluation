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
      // hotelArray: [],
      // hotelArrayInfo: []
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

  // componentDidMount = async () => {
    
  //   this.submitSearch()
  // }
  submitSearch = async (e) => {
    e.preventDefault();
    const url = `http://engine.hotellook.com/api/v2/cache.json?location=${this.state.city}&checkIn=${this.state.checkIn}&checkOut=${this.state.checkOut}&currency=usd&limit=10&token=${process.env.REACT_APP_TRAVEL_API_KEY}`
    const hotels = await axios(url)
     console.log(hotels.data)
    this.props.reservation(hotels.data)
    this.props.passCity(this.state.city)
    console.log(hotels.data[0].locationId)

    
    const url2 = `http://yasen.hotellook.com/tp/public/widget_location_dump.json?currency=usd&language=en&limit=10&id=${hotels.data[0].locationId}&type=popularity&check_in=${this.state.checkIn}&check_out=${this.state.checkOut}&token=${process.env.REACT_APP_TRAVEL_API_KEY}`
    const hotelInfo = await axios(url2) 
    //console.log(hotelInfo)
    this.props.reserveInfo(hotelInfo.data.popularity)

    console.log(hotelInfo.data.popularity)
    
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
