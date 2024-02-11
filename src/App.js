import logo from './logo.svg';
import './App.css';
import { Button } from './reusable-components/Button/Button';
import { useState } from 'react';
import { Header } from './reusable-components/Header/Header';
import NavigationMenuDemo from './reusable-components/NavigationMenu/NavigationMenu';

function App() {
  
  return (
    <div className="App">
      <Header />
      <NavigationMenuDemo />
    </div>
  );
}

export default App;
