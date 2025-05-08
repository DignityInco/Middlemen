import React, { useContext } from 'react';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator'; // We’ll create this next
import { AuthContext } from '../context/AuthContext';

const RootNavigator = () => {
  const { user } = useContext(AuthContext);

  return user ? <AppNavigator /> : <AuthNavigator />;
};

export default RootNavigator;
