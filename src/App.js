import React from 'react';
import './App.css';
import { Component } from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import HotelsList from './components/HotelsList';
import HotelDetails from './components/HotelDetails';
import HotelsMap from './components/HotelsMap';


class App extends Component {

  state = {
    hotelArray: [],
    hotelArrayInfo: [],
    city: ''
  }

  passCity = (hotelsCity) => {
    this.setState({
      city: hotelsCity
    })
  }

  reservation = (hotels) => {
    this.setState({
      hotelArray: hotels
     })
  }

  reserveInfo = (hotelsInfo) => {
    this.setState({
      hotelArrayInfo: hotelsInfo
     })
  }

  render() {
    return (
      <div className="App">
        
        <Header />
        
        <main className="container">
          
        
          
          <Route path="/" exact>
            <Form reservation={this.reservation} reserveInfo={this.reserveInfo} passCity={this.passCity}/>
            <HotelsList hotelArray={this.state.hotelArray} hotelArrayInfo={this.state.hotelArrayInfo} city={this.state.city}/>
          </Route>
          <Route path="/:hotel">
            <HotelDetails hotelArray={this.state.hotelArray} hotelArrayInfo={this.state.hotelArrayInfo}/>
          </Route>
          
        </main>
      
        <Footer />
      
      </div>
    );
  }
}
export default App;
