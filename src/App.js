import React, { useState, useEffect, createContext } from "react";
import LoginForm from "./Form/LoginForm";
import RegisterForm from "./Form/RegisterForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

export const LoginContext = createContext();
export const UsersContext = createContext();

function App() {
  const [loginStatus, setLoginStatus] = useState(getInitialLoginStatus());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    localStorage.setItem("userDesc", JSON.stringify(loginStatus));
  }, [loginStatus]);

  // get the initial login status from localstorage
  function getInitialLoginStatus() {
    const userInfo = JSON.parse(localStorage.getItem("userDesc"));
    return userInfo || false;
  }

  console.log(loginStatus);

  return (
    <div>
      <UsersContext.Provider value={[users, setUsers]}>
        <LoginContext.Provider value={[loginStatus, setLoginStatus]}>
        <Navbar />
          <Router>
            <Switch>
             
              <Route exact path="/"
                render = {() => (loginStatus ? <Home /> : <LoginForm />)}
              />

              <Route exact path="/register" component={RegisterForm} />
              
            </Switch>
          </Router>
        </LoginContext.Provider>
      </UsersContext.Provider>
    </div>
  );
}

export default App;
