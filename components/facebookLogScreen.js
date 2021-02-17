import React from 'react';
import { Alert, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import * as Facebook from 'expo-facebook';

export default function facebookLogScreen() {

async function logInFB() {
  try {
    await Facebook.initializeAsync({
      appId: '224084946034032',
    });
    const {
      type,
      token,
      expirationDate,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      const response = await fetch(`https://graph.facebook.com/me/?fields=id,name&access_token=${token}`);
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
    
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => logInFB()}>
        <Text style={styles.text}>Connect with Facebook </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#03a9f4',
    padding: 10,
  },
  text: {
    color: 'white'
  },
});