import React from 'react';
import './App.css';
import { Component } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import { Route, Link, BrowserRouter } from "react-router-dom"
import HotelsList from './components/HotelsList';

class App extends Component {

  state = {
    hotelArray: []
  }

  reservation = (hotels) => {
    this.setState({
       hotelArray: hotels
     })
  }

  render() {
    return (
      <div className="App">
        
        <Header />
        
        <main className="container">
          <Route path="/" exact>
          <Form reservation={this.reservation} />
           
            <HotelsList hotelArray={this.state.hotelArray}/>
          </Route>
        </main>
      
        <Footer />
      
      </div>
    );
  }
}
export default App;
