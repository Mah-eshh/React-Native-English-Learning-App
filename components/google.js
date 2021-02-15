import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import * as Google from 'expo-google-app-auth'; //import
import { FontAwesome } from '@expo/vector-icons';

class google extends Component {

  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };
  onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
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
                    // console.log('Snapshot', snapshot);
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
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log('User already signed-in Firebase.');
        }
      }.bind(this)
    );
  };
  

//  signInWithFacebookAsync = async () => {
//   try {
//     await Facebook.initializeAsync({
//       appId: '',
//     });
//     const {
//       type,
//       token,
//       expirationDate,
//       permissions,
//       declinedPermissions,
//     } = await Facebook.logInWithReadPermissionsAsync({
//       permissions: ['public_profile'],
//     });
//     if (type === 'success') {
//       // Get the user's name using Facebook's Graph API
//       const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
//       Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
//     } else {
//       // type === 'cancel'
//     }
//   } catch ({ message }) {
//     alert(`Facebook Login Error: ${message}`);
//   }
// }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Button
//           title="Sign In With Facebook"
//           onPress={() => this.signInWithFacebookAsync()}
//         />
//       </View>
//     );
//   }

  
  signInWithGoogleAsync = async () => {
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
          style={{ width:"50%", height: 200 }}
          source={require('../assets/without.jpg')}
          resizeMode="contain"
        />
            <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }} >Social Login in with google</Text>
      <Text>Confirm to Login</Text>
       <FontAwesome.Button name="google" backgroundColor="#DD4B39" onPress={() => this.signInWithGoogleAsync()}>
         Login with Google</FontAwesome.Button>

            <TouchableOpacity 
          onPress={() => this.props.navigation.navigate("SignUp")}
          style={{ width: 280, backgroundColor: '#0d47a1', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30 }}
          >
          <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Back to E-mail Sign Up </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate("Login")}
          style={{ width: 280, backgroundColor: '#0d4771', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30 }}
          >
          <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Back to E-mail Sign In </Text>
        </TouchableOpacity>
      </View>
      
    );
  }
}
export default google;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});
