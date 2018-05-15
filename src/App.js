import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Portfolio from './components/pages/portfolio';
import About from './components/pages/about';


// includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App Site">
          <div className="Site-content">
            <div className="Site-header">
              <Header />
            </div>
            <div className="main">
              <Route exact path='/' component={Homepage} />
              <Route exact path='/Portfolio' component={Portfolio} />
              <Route exact path='/About' component={About} />
            </div>
          </div>
          <Footer />
        </div >
      </Router >
    );
  }
}

export default App;
