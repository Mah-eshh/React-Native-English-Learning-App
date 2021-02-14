import React from "react";
import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import { AsyncStorage } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


export default class SignUp extends React.Component {
  state = { email: "", password: "", errorMessage: null };
  componentDidMount() {
    //1.
    // const value=AsyncStorage.gettItem("key");
    //if (value !== null){}
    //2.
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user != null) {
    //     console.log("We are authenticated now!");
    //   }
    // });
  }

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate("AppMain"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <View style={styles.container}>
      <Image
          style={{ width:"50%", height: 150 }}
          source={require('../assets/myUp.jpg')}
          resizeMode="contain"
        />
      <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center' }} >Hello! welcome to smart English app</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }} >Create an account</Text>  
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
        // style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          
        />
        <TextInput
        style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 20 }}
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
         

              <TouchableOpacity 
                  onPress={() => this.handleSignUp()}
                  style={{ width: 350, backgroundColor: '#0d47a1', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 30 }}
                  >
                  <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 16 }}>Sign Up </Text>
                </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate("Login")}
          style={{ width: 280, backgroundColor: '#FFF', padding: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 30 }}
          >
          <Text style={{ textAlign: 'center', color: '#000080', fontSize: 17 }}>Have an account? Sign in </Text>
        </TouchableOpacity>
        
         {/* <Button
          title="Sign In With Google"
          onPress={() => this.props.navigation.navigate("google")}
        /> */}
          <FontAwesome.Button name="google" backgroundColor="#ff6347" onPress={() => this.props.navigation.navigate("google")}>
         Login with Google    </FontAwesome.Button>

     {/* <Icon.Button name="google"backgroundColor="#DD4B39" 
        style={{padding: 15}}>
        Login with Google
      </Icon.Button> */}
      
     <FontAwesome.Button name="facebook" backgroundColor="#03a9f4" onPress={() => this.props.navigation.navigate("facebook")}>
         Login with Facebook </FontAwesome.Button>

        {/* <Button
          title="Login via OTP"
          onPress={() => this.props.navigation.navigate("Otp")}
        /> 
         */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff'
   
  },
  textInput: {
    height: 45,
    width: "85%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 8,
    fontSize: 19,
    padding:12,
    marginBottom: 10,
  },
});
