import { useContext } from "react";
import "./App.css"
import { Login } from "./pages/Login/Login"
import { Main } from "./pages/Main/Main"
import { ProfileForm } from "./components/ProfileForm/ProfileForm"

import dataContext from "./context";
import { Routes, Route } from "react-router-dom";

function App() {
  const context = useContext(dataContext);
  const {Provider} = dataContext;
  
  return (
    <Provider value={context}>
      <div className="App">
      <Routes>
        <Route path="login" element={<Login formType="login" />} />
        <Route path="register" element={<Login formType="register" />} />
        <Route path="/" element={<Main/> }>
          <Route path="profile" element={<ProfileForm />} />
        </Route>
      </Routes>
      </div>
    </Provider>
  );
}

export default App;
