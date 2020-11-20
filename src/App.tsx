import React from 'react';
import LoginForm from './Form/LoginForm';
import RegisterForm from './Form/RegisterForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/" component={LoginForm} />

          <Route exact path="/register" component={RegisterForm} />
      
        </Switch>
      </Router>
    </div>
  );
}

export default App;
