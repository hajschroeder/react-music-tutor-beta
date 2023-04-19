import React, { useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About';
import Learning from './components/pages/Learning';
import Navbar from './components/Layout/Navbar';
import Contact from './components/pages/Contact';



function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/learning' exact component={Learning} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
