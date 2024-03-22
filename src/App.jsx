import React from 'react';
import { BrowserRouter, Route, Router, Link, NavLink, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Nav from './component/Nav';


const App = () => {
  return (
    <BrowserRouter>
    <header>
      <Nav />
    </header>
      <main>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/about' element={ <About/> }/>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;