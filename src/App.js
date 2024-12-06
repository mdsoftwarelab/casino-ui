import './App.css';
import {Outlet} from "react-router-dom";
import Menu from "./Components/menu/menu";

function App() {
  return (
      <div className="grid main-layout">
      <header className="grid header h-full header-layout">
          <div className="flex items-center h-full">
              <div className="ml-2">
                <img src="/images/logo.png" height="27" alt="logo"/>
              </div>
          </div>
          <div className="flex items-center justify-end h-full mr-2">
            <Menu />
          </div>
      </header>
          <main className="main h-full">
                <Outlet />
          </main>
      </div>
  );
}

export default App;
