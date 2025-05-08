import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FarmerTabs from '../screens/farmers/FarmerTabs';
import BuyerTabs from '../screens/buyers/BuyerTabs';
import RetailerTabs from '../screens/retailers/RetailerTabs';
import OthersTabs from '../screens/others/OthersTabs';
import { AuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { user } = useContext(AuthContext);

  if (!user?.accountType) return null;

  let Component;
  switch (user.accountType) {
    case 'farmer':
      Component = FarmerTabs;
      break;
    case 'buyer':
      Component = BuyerTabs;
      break;
    case 'retailer':
      Component = RetailerTabs;
      break;
    case 'others':
      Component = OthersTabs;
      break;
    default:
      Component = BuyerTabs;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Component} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
