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
  function showPage() {
    switch (currentPage) {
      case "login":
        return (
          <Login onLogin={showMainPage} />
        )
      case "main":
        return (
          <Main />
        )
      default:
        break;
    }
  }
  return (
    <div className="App">
      {showPage()}
    </div>
  );
}

export default App;
