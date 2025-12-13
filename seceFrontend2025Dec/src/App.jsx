import "./css/App.css";

import Navbar from './components/functionalComponents/Navbar.jsx';
import ClassComponent from './ClassComponent.jsx';

// import LearningReact component
import LearningReact from './components/functionalComponents/LearningReact.jsx';

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

        {/* Call LearningReact here */}
        <LearningReact />

        {/* Image */}
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
