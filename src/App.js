import React, { useState, useEffect, createContext } from "react";
import LoginForm from "./Form/LoginForm";
import RegisterForm from "./Form/RegisterForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import SuccessMsg from "./Pages/SuccessMsg";

export const LoginContext = createContext();

function App() {
  const [loginStatus, setLoginStatus] = useState(getInitialLoginStatus());

  useEffect(() => {
    localStorage.setItem("loginStatus", JSON.stringify(loginStatus));
  }, [loginStatus]);

  // get the initial login status from localstorage
  function getInitialLoginStatus() {
    const userInfo = JSON.parse(localStorage.getItem("loginStatus"));
    return userInfo || false;
  }

  return (
    <div>
      <LoginContext.Provider value={[loginStatus, setLoginStatus]}>
        <Navbar />
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (loginStatus ? <Home /> : <LoginForm />)}
            />

            <Route exact path="/register" component={RegisterForm} />

            <Route exact path="/success" component={SuccessMsg} />

          </Switch>
        </Router>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
