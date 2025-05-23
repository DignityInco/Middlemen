// frontend/App.tsx

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView, StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import 'react-native-gesture-handler'
import './styles/tailwind.css'
import { AuthProvider } from './context/AuthContext';

import RootNavigator from './navigation'

import './firebase/firebase' // Initializes Firebase once

export default function App() {
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle="dark-content" />
            <RootNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthProvider>
      )
}
