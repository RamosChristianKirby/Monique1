import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const handleLogout = () => {
    
    navigation.navigate('Landing'); 
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 42, color: '#40F8FF' }}>2GO!!</Text>
      <Text>You have successfully entered HELP2GO</Text>
      <Text>You can now logout using the logout button below :</Text>

      <TouchableOpacity onPress={handleLogout} style={styles.logout}>
        <SimpleLineIcons name="logout" size={24} color="#FFFF" />
        <Text style={styles.sign}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  sign: {
    marginLeft: 10,
    color: '#FFFF',
  },
  logout: {
    padding: 15,
    backgroundColor: '#40F8FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginTop: 30,
    borderRadius: 10,
    fontSize: 20,
  },
});
