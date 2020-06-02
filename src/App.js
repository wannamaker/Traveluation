import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
     
        <Header />
      
      <main className="container"> 
        <Form/>
        </main>
      
      <Footer/>
      
    </div>
  );
}

export default App;
