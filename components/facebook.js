import React from 'react';
import { Alert, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import * as Facebook from 'expo-facebook';

export default function facebook() {

  // get data from facebook using token
// async function logInFB() {
//   try {
//     await Facebook.initializeAsync('224084946034032');
//     const {
//       type,
//       token,
//       expires,
//       permissions,
//       declinedPermissions,
//     } = await Facebook.logInWithReadPermissionsAsync({
//       permissions: ['public_profile'],
//     });
//     if (type === 'success') {
//       // Get the user's name using Facebook's Graph API
//       const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=email,first_name,last_name,picture.type(large)`);
//       const { first_name, last_name, email, picture } = await response.json();
//       Alert.alert('Logged in!', `Hi ${(first_name)} ${(last_name)} ${(email)}`);
//       const picUrl = picture.data.url
//       console.log(picUrl);
//     } else {
//       // type === 'cancel'
//     }
//   } catch ({ message }) {
    
//     }
//   }
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
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
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
    backgroundColor: '#fff',
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