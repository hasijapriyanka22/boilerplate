import logo from './logo.svg';
import './App.css';
import { Button } from './reusable-components/Button/Button';
import { useState } from 'react';
import { Header } from './reusable-components/Header/Header';
import { NavBar } from './reusable-components/NavBar/NavBar';

function App() {
  
  return (
    <div className="App">
      <Header showNavBar={true}/>
      <NavBar />
    </div>
  );
}

export default App;
