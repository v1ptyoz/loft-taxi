import "./App.css"
import Login from "./pages/Login/Login"
import Main from "./pages/Main/Main"
import ProfileForm from "./components/ProfileForm/ProfileForm"
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { loadCard } from "./modules/card"
import { useEffect } from "react";

function App(props) {
  
  useEffect(() => {
    if (props.user.token) {
      props.loadCard(props.user.token);
    }
  }, [props.user.token])

  return (
    <div className="App">
    <Routes>
      <Route path="login" element={<Login formType="login" />} />
      <Route path="register" element={<Login formType="register" />} />
      <Route path="/" element={<Main /> }>
        <Route path="profile" element={<ProfileForm />} />
      </Route>
    </Routes>
    </div>
  );
}

export default connect(
  (state) => ({user: state.user}),
  { loadCard }
)(App);
