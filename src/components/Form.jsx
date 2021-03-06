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
      hotelArrayInfo: [],
      formSubmitted: false
      
    }

  }

  
  
  handleCityChange = (e) => {
    this.setState({
      city: e.target.value,
      
    })
  }

  handleCheckInChange = (e) => {
    this.setState({
      checkIn: e.target.value,
      
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
    
this.props.passSubmit()

    const REACT_APP_TRAVEL_API_KEY = process.env.REACT_APP_TRAVEL_API_KEY
    const url = `https://engine.hotellook.com/api/v2/cache.json?location=${this.state.city}&checkIn=${this.state.checkIn}&checkOut=${this.state.checkOut}&currency=usd&limit=100&token=${REACT_APP_TRAVEL_API_KEY}`
    const hotels = await axios(url)
     console.log(hotels.data)
    this.props.reservation(hotels.data)
    this.props.passCity(this.state.city)
    console.log(hotels.data[0].locationId)

    
    const url2 = `https://yasen.hotellook.com/tp/public/widget_location_dump.json?currency=usd&language=en&limit=100&id=${hotels.data[0].locationId}&type=popularity&check_in=${this.state.checkIn}&check_out=${this.state.checkOut}&token=${REACT_APP_TRAVEL_API_KEY}`
    const hotelInfo = await axios(url2) 
    //console.log(hotelInfo)
    this.props.reserveInfo(hotelInfo.data.popularity)

    console.log(hotelInfo.data.popularity)

    this.setState({
      hotelArrayInfo: hotelInfo.data.popularity
    })
    console.log(this.state.hotelArrayInfo)
  } 

  

  render() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    let date = yyyy+'-'+mm+'-'+dd;
    
    console.log(date)
   
    return (
     
      <div>
        <div className="div-pick"><h2 className="pick">Pick a city, a check-in and a check-out date</h2></div>
      <div className="div-form">
        
        <form className="initial-form">
          <input type="text" placeholder="City" onChange={this.handleCityChange} className="form-city"/>
            <input type="date" placeholder="Check-in" onChange={this.handleCheckInChange} className="form-date-in" min={date}/>
            <input type="date" placeholder="Check-out" onChange={this.handleCheckOutChange} className="form-date-out" min={this.state.checkIn}/>
          <button onClick={this.submitSearch} className="form-button">Submit</button>
        </form>
        
        </div>
       
        </div>
    )
  }
}
