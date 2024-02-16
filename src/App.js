import logo from './logo.svg';
import './App.css';
import { Button } from './reusable-components/Button/Button';
import { useState } from 'react';
import { Header } from './reusable-components/Header/Header';
import { NavBar } from './reusable-components/NavBar/NavBar';
import { AccordionCollapse } from './reusable-components/AccordionCollapse/AccordionCollapse';

function App() {
  const dummyItems =  [
    {
      panelHeaderText: 'This is panel header 1',
      panelContentText: `A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.`,
      imgSrc: 'https://assets-global.website-files.com/602f5458a0b1d868c6c84d5b/64cf6771d3768d39b71c4139_3.png'
    },
    {
      panelHeaderText: 'This is panel header 1',
      panelContentText: `A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.`,
      imgSrc: 'https://assets-global.website-files.com/602f5458a0b1d868c6c84d5b/64cf6771d3768d39b71c4139_3.png'
    },
  ];
  return (
    <div className="App">
      <AccordionCollapse collapseItems={dummyItems}/>
    </div>
  );
}

export default App;
