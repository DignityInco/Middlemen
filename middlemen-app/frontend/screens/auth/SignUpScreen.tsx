import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'

export default function SignUpScreen({ navigation }: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignUp = async () => {
    if (!email || !password) return Alert.alert('Missing fields', 'Enter email and password.')
    setLoading(true)
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email.trim(), password)
      const uid = userCred.user.uid

      // Create default user profile in Firestore
      await setDoc(doc(db, 'users', uid), {
        email: email.trim(),
        createdAt: new Date(),
        role: 'buyer', // default role (can be changed in onboarding)
      })

      // Navigation will redirect after auth state changes
    } catch (error: any) {
      Alert.alert('Sign Up Error', error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className="flex-1 justify-center items-center px-6 bg-white">
      <Text className="text-3xl font-bold mb-8 text-green-600">Join Middlemen</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6"
        secureTextEntry
      />

      <TouchableOpacity
        className="bg-green-600 w-full py-3 rounded-lg"
        onPress={handleSignUp}
        disabled={loading}
      >
        <Text className="text-white text-center font-semibold">
          {loading ? 'Creating Account...' : 'Sign Up'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-4" onPress={() => navigation.navigate('SignIn')}>
        <Text className="text-sm text-gray-600">
          Already have an account?{' '}
          <Text className="text-green-600 font-semibold">Sign In</Text>
        </Text>
      </TouchableOpacity>
    </View>
  )
}
