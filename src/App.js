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
import About from './components/About';


class App extends Component {

  state = {
    hotelArray: [],
    hotelArrayInfo: [],
    city: '',
    formSubmitted: false
  }

  passSubmit = () => {
    this.setState({
      formSubmitted: true
    })
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
      hotelArrayInfo: hotelsInfo,
      formSubmitted: false
     })
  }

  render() {
    return (
      <div className="App">
        
        <Header />
        
        <main className="container">
          
        
          
          <Route path="/" exact>
            <Form reservation={this.reservation} reserveInfo={this.reserveInfo} passCity={this.passCity} passSubmit={this.passSubmit}/>
            <HotelsList hotelArray={this.state.hotelArray} hotelArrayInfo={this.state.hotelArrayInfo} city={this.state.city} passSubmit={this.passSubmit} formSubmitted={this.state.formSubmitted}/>
          </Route>
          <Route path="/:hotel">
            <HotelDetails hotelArray={this.state.hotelArray} hotelArrayInfo={this.state.hotelArrayInfo}/>
          </Route>

          <Route path="/About">
          <About/>
          </Route>
        </main>
      
        <Footer />
      
      </div>
    );
  }
}
export default App;
