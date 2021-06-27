import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/'>
            <Dashboard />
          </PrivateRoute>
          <Route exact path='/login' component={Login} />
          <Route path='*' component={Error} />
        </Switch>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
