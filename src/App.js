import React from 'react';
import './App.css';
import Navbar from './container/Navbar';
import Home from './container/Home';
import Projects from './container/Projects';
import { Switch, Route } from 'react-router-dom';
import Blogs from './container/Blogs';
import Repository from './container/Repository';

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path='/projects' component={Projects} />
        <Route path='/repos' component={Repository} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/' component={Home} />
      </Switch>
    </main>
  );
}

export default App;
