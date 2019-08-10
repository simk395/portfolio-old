import React from 'react';
import './App.css';
import Navbar from './container/Navbar';
import Home from './container/Home';
import Projects from './container/Projects';
import { Switch, Route } from 'react-router-dom';
import Repository from './container/Repository';

require('dotenv').config()
function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path='/projects' component={Projects} />
        <Route path='/repos' component={Repository} />
        <Route path='/' component={Home} />
      </Switch>
    </main>
  );
}

export default App;
