import { useState } from "react";
import "./App.css"
import { Login } from "./pages/Login/Login"
import { Main } from "./pages/Main/Main"


function App() {
  let [currentPage, setCurrentPage] = useState('login');
  function showLoginPage() {
    setCurrentPage("login");
  }
  function showMainPage() {
    setCurrentPage("main");
  }
  return (
    <div className="App">
      {currentPage === 'login' && <Login onLogin={showMainPage} />}
      {currentPage === 'main' && <Main/>}
    </div>
  );
}

export default App;
