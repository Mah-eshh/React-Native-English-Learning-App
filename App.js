import React from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import * as firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBysL6m1n_6NZo2noTSygLfgLS9aRMEIMk",
    authDomain: "zinc-fusion-302607.firebaseapp.com",
    databaseURL: "https://zinc-fusion-302607-default-rtdb.firebaseio.com",
    projectId: "zinc-fusion-302607",
    storageBucket: "zinc-fusion-302607.appspot.com",
    messagingSenderId: "215197510308",
    appId: "1:215197510308:web:d17f60de74b890e9769431"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// import the different screens
import Loading from "./components/Loading";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import AppMain from "./AppMain";
import google from "./components/google";
import Otp from "./components/Phone/Otp";
import facebook from './components/facebook';

// create our app's navigation stack
const RootStack = createSwitchNavigator(
  {
    Loading: Loading,
    Login: Login,
    SignUp: SignUp,
    AppMain: AppMain,
    google: google,
    Otp: Otp,
    facebook:facebook
  },
  {
    initialRouteName: "Loading"
  }
);

const App = createAppContainer(RootStack);
export default App;
