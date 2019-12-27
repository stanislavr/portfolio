import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/Resumes';
import Portfolios from './pages/Portfolios';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/resume' component={Resume} />
        <Route path='/portfolios' component={Portfolios} />
        <Route path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
