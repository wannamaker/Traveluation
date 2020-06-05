import React from 'react';
import './App.css';
import { Component } from 'react'
import { Route, Link, BrowserRouter } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import HotelsList from './components/HotelsList';
import HotelDetails from './components/HotelDetails';

class App extends Component {

  state = {
    hotelArray: [],
    hotelArrayInfo: []
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
          <Form reservation={this.reservation} reserveInfo={this.reserveInfo}/>
           <HotelsList hotelArray={this.state.hotelArray} hotelArrayInfo={this.state.hotelArrayInfo}/>
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
