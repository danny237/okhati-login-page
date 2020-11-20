import React, { useState, useEffect } from 'react';
import LoginForm from './Form/LoginForm';
import RegisterForm from './Form/RegisterForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const LoginContext = React.createContext();

function App() {

  const [loginStatus, setLoginStatus] = useState(getInitialLoginStatus());

  useEffect(() => {
    localStorage.setItem('userDesc', JSON.stringify(loginStatus))
  },[loginStatus])

  // get the initial login status from localstorage
  function getInitialLoginStatus(){
    const userInfo = JSON.parse(localStorage.getItem('userDesc'))
    return userInfo || false
  }

  console.log(loginStatus)
  

  return (
    <div >
      <LoginContext.Provider value={[loginStatus, setLoginStatus]}>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginForm} />

            <Route exact path="/register" component={RegisterForm} />
        
          </Switch>
        </Router>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
