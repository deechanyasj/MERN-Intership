import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/functionalComponents/Navbar.jsx'
import Props from './components/functionalComponents/Props.jsx'
import "./css/App.css"
import ClassComponent from './ClassComponent.jsx'

function App() {
  const h1Style = {
    background: "blue",
    color: "white",
    textAlign: "center",
  };

  return (
    <header>
      <Navbar />
      <div>
        <h1 style={h1Style}>welcome to jsx</h1>
        <h2 className='h2'>This is a simple React component</h2>
        <ClassComponent />

        {/* FIXED IMAGE PATH */}
        <img 
          src="/vite.svg" 
          alt="Vite Logo" 
          style={{ marginLeft: "100px" }} 
        />
      </div>
    </header>
  );
}

export default App;
