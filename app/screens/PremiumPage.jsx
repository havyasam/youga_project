import React, { useContext } from 'react';
import { View, Button,Text,Image} from 'react-native';
import { UserContext } from '../context/UserContext';

const PremiumPage = ({ navigation }) => {
  const { logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();  
    navigation.navigate('logout');  
  };

  return (
    <View>
      <Text>Please take premium subscription</Text>
      <Image source={{uri: 'https://storage.googleapis.com/iew-public-production/files/videocourse/images/twss2-prem-go_thumb.png'}}
       style={{width: 400, height: 400}} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default PremiumPage;
