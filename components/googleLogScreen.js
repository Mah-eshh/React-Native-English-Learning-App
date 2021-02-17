import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import * as Google from 'expo-google-app-auth'; //import
import { FontAwesome } from '@expo/vector-icons';
class googleLogScreen extends Component {

  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          return true;
        }
      }
    }
    return false;
  };
  onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser);
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe();
       
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
        
          firebase
            .auth()
            .signInWithCredential(credential)
            .then(function(result) {
              console.log('user signed in ');
              if (result.additionalUserInfo.isNewUser) {
                firebase
                  .database()
                  .ref('/users/' + result.user.uid)
                  .set({
                    gmail: result.user.email,
                    profile_picture: result.additionalUserInfo.profile.picture,
                    first_name: result.additionalUserInfo.profile.given_name,
                    last_name: result.additionalUserInfo.profile.family_name,
                    created_at: Date.now()
                  })
                  .then(function(snapshot) {
                   
                  });
              } else {
                firebase
                  .database()
                  .ref('/users/' + result.user.uid)
                  .update({
                    last_logged_in: Date.now()
                  });
              }
            })
            .catch(function(error) {
             
              var errorCode = error.code;
              var errorMessage = error.message;
             
              var email = error.email;
            
              var credential = error.credential;
            
            });
        } else {
          console.log('User already signed-in Firebase.');
        }
      }.bind(this)
    );
  };
  
  signInWithGoog = async () => {
    try {
      const result = await Google.logInAsync({
          // behavior: 'web',
        androidClientId: '215197510308-j2q0jgmmimo2196aael6ib2i89iumcmb.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      });

      if (result.type === 'success') {
        this.onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };
  render() {
    return (
      <View style={styles.container}>
       <Image
          style={{ width:"50%", height: 220 }}
          source={require('../assets/without.jpg')}
          resizeMode="contain" 
        />
            <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }} >Social Login in with google</Text>
      <Text>Confirm to Login</Text>
       <FontAwesome.Button name="google" backgroundColor="#ff6347" onPress={() => this.signInWithGoog()}>
         Login with Google   </FontAwesome.Button>

            <TouchableOpacity 
          onPress={() => this.props.navigation.navigate("SignUp")}
          style={{ width: 280, backgroundColor: '#40e0d0', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 50,  borderRadius: 10 }}
          >
          <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Back to E-mail Sign Up </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate("Login")}
          style={{ width: 280, backgroundColor: '#87cefa', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 40 ,  borderRadius: 10}}
          >
          <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Back to E-mail Sign In </Text>
        </TouchableOpacity>
      </View>
      
    );
  }
}
export default googleLogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});
