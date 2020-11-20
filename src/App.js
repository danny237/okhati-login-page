import React from 'react';
import LoginForm from './Form/LoginForm';
import RegisterForm from './Form/RegisterForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const LoginContext = React.createContext();

function App() {

  return (
    <div >
      <LoginContext.Provider>
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
