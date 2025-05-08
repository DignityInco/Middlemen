import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, PlusCircle, BarChart2, User } from 'lucide-react-native';
import FarmerHome from './FarmerHome';
import FarmerBarrow from './FarmerBarrow';
import AddToCatalogue from './AddToCatalogue';
import FarmerDashboard from './FarmerDashboard';
import FarmerProfile from './FarmerProfile';

const Tab = createBottomTabNavigator();

const FarmerTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#10b981', // Tailwind emerald-500
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: 'white', height: 60 },
        tabBarLabelStyle: { fontSize: 12, marginBottom: 4 },
        tabBarIconStyle: { marginTop: 4 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={FarmerHome}
        options={{
          tabBarIcon: ({ color }) => <Home color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="Barrow"
        component={FarmerBarrow}
        options={{
          tabBarIcon: ({ color }) => <BarChart2 color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="Catalogue"
        component={AddToCatalogue}
        options={{
          tabBarIcon: ({ color }) => <PlusCircle color={color} size={22} />,
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={FarmerDashboard}
        options={{
          tabBarIcon: ({ color }) => <BarChart2 color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={FarmerProfile}
        options={{
          tabBarIcon: ({ color }) => <User color={color} size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default FarmerTabs;
