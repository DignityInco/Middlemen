// frontend/screens/auth/SignInScreen.tsx

import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SignInScreen() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignIn = async () => {
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password)
      // Navigation will be handled by RoleRedirect (after login)
    } catch (err: any) {
      Alert.alert('Sign In Failed', err.message || 'Check your credentials.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-3xl font-bold text-green-700 mb-8">Welcome Back</Text>

      <TextInput
        className="w-full border border-gray-300 p-3 rounded-lg mb-4"
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        className="w-full border border-gray-300 p-3 rounded-lg mb-6"
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        onPress={handleSignIn}
        className="w-full bg-green-700 py-3 rounded-lg mb-4"
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-center text-white text-lg font-semibold">Sign In</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text className="text-gray-600 text-sm">
          Don’t have an account? <Text className="text-green-700 font-semibold">Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
