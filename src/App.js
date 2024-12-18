import './App.css';
import {Outlet} from "react-router-dom";
import Navbar from "./Components/navbar/navbar";

function App() {
  return (
      <div className="main-layout">
          <header>
              <Navbar/>
          </header>
          <main className="main">
                <Outlet />
          </main>
      </div>
  );
}

export default App;
