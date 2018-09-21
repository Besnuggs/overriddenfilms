import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import routes from './routes.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      {routes}
      <Footer />
      </div>
    );
  }
}

export default App;
