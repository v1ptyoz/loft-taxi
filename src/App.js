import { useState } from "react";
import "./App.css"
import { Login } from "./pages/Login/Login"
import { Main } from "./pages/Main/Main"


function App() {
  let [currentPage, setCurrentPage] = useState('login');
  function showPage(page) {
    setCurrentPage(page);
  }
  return (
    <div className="App">
      {currentPage === 'login' && <Login showPage={showPage} />}
      {currentPage === 'main' && <Main currentPage={currentPage} showPage={showPage} />}
      {currentPage === 'profile' && <Main currentPage={currentPage} showPage={showPage} />}
    </div>
  );
}

export default App;
