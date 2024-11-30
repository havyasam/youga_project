import { View, Text } from 'react-native'
import React from 'react'

import { UserProvider } from './context/UserContext'
import AppNavigator from './navigation/AppNavigator'

const index = () => {
  return (
    <UserProvider>
        <AppNavigator />
    </UserProvider>
  )
}

export default index