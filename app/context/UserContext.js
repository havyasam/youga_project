import React, { createContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [premiumToken, setPremiumToken] = useState(null);

  // Function to save tokens securely
  const saveToken = async (key, value) => {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error) {
      console.error('Error saving token', error);
    }
  };

  // Function to load tokens securely
  const getToken = async (key) => {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (error) {
      console.error('Error getting token', error);
      return null;
    }
  };

  // Function to delete tokens securely
  const deleteToken = async (key) => {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      console.error('Error deleting token', error);
    }
  };

  // Load tokens when component mounts
  useEffect(() => {
    const loadTokens = async () => {
      const savedAuthToken = await getToken('authToken');
      const savedPremiumToken = await getToken('premiumToken');
      setAuthToken(savedAuthToken);
      setPremiumToken(savedPremiumToken);
    };
    loadTokens();
  }, []);

  // Login function
  const login = async (auth, premium = null) => {
    await saveToken('authToken', auth);
    setAuthToken(auth);
    if (premium) {
      await saveToken('premiumToken', premium);
      setPremiumToken(premium);
    }
  };

  // Logout function
  const logout = async () => {
    await deleteToken('authToken');
    await deleteToken('premiumToken');
    setAuthToken(null);
    setPremiumToken(null);
  };

  return (
    <UserContext.Provider value={{ authToken, premiumToken, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
