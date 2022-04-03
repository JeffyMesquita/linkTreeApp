import React from 'react';
import useAuth from '../hooks/useAuth';

import LoggedStack from './LoggedStack';
import AuthStack from './AuthStack';

function Routes() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <LoggedStack /> : <AuthStack />;
}

export default Routes