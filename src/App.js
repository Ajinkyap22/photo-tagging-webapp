import "./App.css";
import main from "./images/main.jpg";
import Navbar from "./Components/nav";

// Create navbar
// Rest of the container with main pic
// A unique cursor
// A menu on clicking

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container-fluid px-0">
        <img src={main} alt="" className="img-fluid w-100" />
      </div>
    </div>
  );
}

export default App;
