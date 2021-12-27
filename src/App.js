import { useContext, useState } from "react";
import "./App.css"
import { Login } from "./pages/Login/Login"
import { Main } from "./pages/Main/Main"
import dataContext from "./context";


function App() {
  let [currentPage, setCurrentPage] = useState('login');
  const context = useContext(dataContext);
  const {Provider} = dataContext;

  function showPage(page) {
    context.isLoggedIn ? setCurrentPage(page) : setCurrentPage("login")
  }
  
  return (
    <Provider value={context}>
      <div className="App">
        {currentPage === 'login' && <Login showPage={showPage} />}
        {currentPage === 'main' && <Main currentPage={currentPage} showPage={showPage} />}
        {currentPage === 'profile' && <Main currentPage={currentPage} showPage={showPage} />}
      </div>
    </Provider>
  );
}

export default App;
