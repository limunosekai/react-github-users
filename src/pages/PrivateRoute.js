import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function PrivateRoute() {
  return <div>Private</div>;
}

export default PrivateRoute;
