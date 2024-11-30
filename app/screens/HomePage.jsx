import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { UserContext } from '../context/UserContext';

const HomePage = ({ navigation }) => {
  const { logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigation.navigate('Login'); 
  };

  return (
    <View>
      <Text>welcome to the home page</Text>
      
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomePage;
