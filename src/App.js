import React from 'react';
import './App.css';
import Summary from './container/Summary';
import Navbar from './container/Navbar';
import Details from './container/Details';
import Header from './container/Header';
import Test1 from './test1';
import Landing from './container/Landing';

function App() {
  return (
    <div className='main'>
      <Landing />
      <Test1 />
    </div>
  );
}

export default App;
