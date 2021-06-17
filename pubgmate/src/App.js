import React, { Component } from 'react';
import Search from './components/Search';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.sass';
import './index.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
          submit: ''
      };
  }

  render() {
    return (
      <>
      <Header />
      <div className="site-content">
      <Search />
      </div>
      <Footer />
      </>
    );
  }
}

export default App;
