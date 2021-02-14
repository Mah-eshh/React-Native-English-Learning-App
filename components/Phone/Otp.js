import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  Button,
  TextInput,
  Image,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import * as firebase from "firebase";
import { Linking, WebBrowser } from "expo";
import { AsyncStorage } from "react-native";
import SignUp from "../SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default class Otp extends Component {
  state = {
    number: "+94",
    errors: {},
    visibleStatus: false
  };

  sendOtp = () => {
    let token = null;
    // Create a web page
    const captchaVerifier = {
      type: "recaptcha",
      verify: () => Promise.resolve(token)
    };
    if (true) {
      // document.getElementById("login_btn").classList = "btn";
      firebase
        .auth()
        .signInWithPhoneNumber("+94" + this.state.number, captchaVerifier)
        .then(function(confirmationResult) {
          console.log("otp sent");
          window.sent = true;
          window.confirmationResult = confirmationResult;
          console.log(confirmationResult);
        })
        .catch(error => {
          console.log(error);
          this.setState({
            visibleStatus: true
          });
          // this.setState({ errors: "Please Reload the page." });
        });
    } else {
      this.setState({ errors: "Enter Valid Number." });
    }
  };

  doLogin = () => {
    this.setState({ errors: "" });
    confirmationResult
      .confirm(this.state.code)
      .then(function(result) {
        // User signed in successfully.
        var user = result.user;
        console.log(user);
      })
      .then(() => {
        console.log(this.state.number + "Logged In");
        AsyncStorage.setItem("user", this.state.number);
      })
      .catch(error => {
        this.setState({ errors: "Otp entered is incorrect." });
      });
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder=""
          onChangeText={number => this.setState({ number })}
          value={this.state.number}
        />
        <Button id="a" title="Send Otp" onPress={this.sendOtp} />

        <TouchableHighlight
          style={this.state.visibleStatus ? null : { display: "none" }}
        >
          <View>
            <Button title="Login" onPress={this.doLogin} />
            
      
  <TouchableOpacity 
          onPress={() => this.props.navigation.navigate("SignUp")}
          style={{ width: 280, backgroundColor: '#FFF', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30 }}
          >
          <Text style={{ textAlign: 'center', color: '#0d47a1', fontSize: 16 }}>Don't have an account? Create here </Text>
        </TouchableOpacity>
    
           
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8
  }
});
