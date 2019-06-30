import React from 'react';
import './App.css';
import Navbar from './container/Navbar';
import Home from './container/Home';
import Projects from './container/Projects';
import { Switch, Route } from 'react-router-dom';
import Blogs from './container/Blogs';

function App() {
  return (
    <div className='main'>
      <Navbar />
      <Switch>
        <Route path='/projects' component={Projects} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
