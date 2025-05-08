import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import Farmer screens
import FarmerBarrow from '../screens/farmers/FarmerBarrow';
import AddToCatalogue from '../screens/farmers/AddToCatalogue';
import FarmerDashboard from '../screens/farmers/FarmerDashboard';
import FarmerProfile from '../screens/farmers/FarmerProfile';
import FarmerHome from '../screens/farmers/FarmerHome';

const Tab = createBottomTabNavigator();

const FarmerTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Barrow':
              iconName = 'pricetags-outline';
              break;
            case 'Add':
              iconName = 'add-circle-outline';
              break;
            case 'Dashboard':
              iconName = 'stats-chart-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#16a34a', // green-600
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={FarmerHome} />
      <Tab.Screen name="Barrow" component={FarmerBarrow} />
      <Tab.Screen name="Add" component={AddToCatalogue} />
      <Tab.Screen name="Dashboard" component={FarmerDashboard} />
      <Tab.Screen name="Profile" component={FarmerProfile} />
    </Tab.Navigator>
  );
};

export default FarmerTab;
