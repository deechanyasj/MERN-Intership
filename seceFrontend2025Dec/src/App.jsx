import Navbar from "./Navbar.jsx";
import "./App.css";
import ClassComponent from "./ClassComponent.jsx";


function App() {
  const h1Style = {
    textAlign: "center",
    backgroundColor: "yellow"
  };
  return (
    <header>
      <Navbar />

      <div>
        <h1 style={{textAlign:"center",backgroundColor:"yellow"}}>Welcome to JsX </h1>
        <h2 className="h2">This is a simple react component</h2>
        <ClassComponent />
        <img src="vite.svg" alt="" style={{marginLeft:"100px",width:"500px"}}/>
      </div>
    </header>
  );
}

export default App;