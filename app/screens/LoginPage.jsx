import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';

const Login = ({ route, navigation }) => {
  const { email } = route.params; 
  const [inputOtp, setInputOtp] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        otp: inputOtp,
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Login Successful!');
        navigation.navigate('Home'); // Navigate to the Home page.
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Invalid OTP or OTP expired!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="OTP"
        keyboardType="numeric"
        value={inputOtp}
        onChangeText={setInputOtp}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 },
  button: { backgroundColor: '#28a745', padding: 15, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default Login;
