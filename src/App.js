import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './components/pages/LandingPage.js'

function App() {
  return(
    <>
      <Router>
        <div>
          <Route path='/' exact component={LandingPage} />
        </div>
      </Router>
    </>
  )
}

export default App;
