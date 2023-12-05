import './App.css';
import React, { useState } from 'react';
import ColorBlock from './components/ColorBlock';
import ColorForm from './components/ColorForm';

function App() {
  let [colors, setColors] = useState(["red", "orange", "yellow", "green", "blue", "indigo", "violet"]);

  let colorMap = colors.map((color ,i) => {
    return <ColorBlock color={color} key={i} />
  })

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  return (
    <div className="App">
      {colorMap}
      <colorForm addColor={addColor} />
    </div>
  );
  }

  export default App; 