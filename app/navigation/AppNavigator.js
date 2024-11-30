import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserContext } from '../context/UserContext';

import LoginPage from '../screens/LoginPage';
import SignUpPage from '../screens/SignUpPage';
import HomePage from '../screens/HomePage';
import PremiumPage from '../screens/PremiumPage';

const Stack = createStackNavigator();


const AppNavigator = () => {
  const { authToken, premiumToken } = useContext(UserContext);

  return (
    
      <Stack.Navigator >
        {!authToken ? (
          
          <>
            <Stack.Screen name="Login" component={LoginPage}  options={{ headerShown: false }}/>
            <Stack.Screen name="Signup" component={SignUpPage}  options={{ headerShown: false }}/>
          </>
        ) : premiumToken ? (
         
          <Stack.Screen name="Home" component={HomePage}  options={{ headerShown: false }}/>
        ) : (
          
          <Stack.Screen name="Premium" component={PremiumPage}  options={{ headerShown: false }}/>
        )}
      </Stack.Navigator>
  
  );
};

export default AppNavigator;
