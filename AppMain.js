import React from 'react';
import { Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './screens/DrawerContent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainTabScreen from './screens/MainTabScreen'; 
import SupportScreen from './screens/SupportScreen';

import  GMScreen from './screens/GMScreen';

// import  DicScreen from './Dictionary/DicScreen';
import PronunScreen from './screens/PronunScreen';

// import ChattingRoom from './chat/ChattingRoom';
import MusicsScreen from './screens/MusicsScreen';

import TensesScreen from './drawer/tenses/TensesScreen';
import PhrasesScreen from './drawer/phrases/PhrasesScreen';
import MaheshScreen from './screens/MaheshScreen';
import ListeningScreen from './drawer/listing/ListeningScreen';
import ReadingScreen from './special/Reading/ReadingScreen';
import WritingScreen from './drawer/notepad/WritingScreen';
import SpeakingPractice from './timer/SpeakingPractice';
// import myShare from './screens/myShare';
import WebBrowserScreen from './drawer/web/WebBrowserScreen';
import PDFScreen from './drawer/web/PDFScreen';
import AboutScreen from './screens/AboutScreen';
import DetailsScreen from './screens/DetailsScreen';

import * as firebase from "firebase";
const Drawer = createDrawerNavigator();

const AppMain = () => {
  return (
    <NavigationContainer> 
 
     <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        
         <Drawer.Screen name="TensesScreen" component={TensesScreen}/>
          <Drawer.Screen name="SupportScreen" component={SupportScreen}/>
          <Drawer.Screen name="PhrasesScreen" component={PhrasesScreen}/>
          <Drawer.Screen name="MaheshScreen" component={MaheshScreen} />

          <Drawer.Screen name="GMScreen" component={GMScreen} />
          {/* <Drawer.Screen name="DicScreen" component={DicScreen} /> */}
          <Drawer.Screen name="PronunScreen" component={PronunScreen}/>
          {/* <Drawer.Screen name="ChattingRoom" component={ChattingRoom} /> */}
          <Drawer.Screen name="MusicsScreen" component={MusicsScreen} />
          <Drawer.Screen name="ListeningScreen" component={ListeningScreen}/>
          <Drawer.Screen name="ReadingScreen" component={ReadingScreen}/>
          <Drawer.Screen name="WritingScreen" component={WritingScreen}/>
          <Drawer.Screen name="SpeakingPractice" component={SpeakingPractice}/>
           {/* <Drawer.Screen name="myShare" component={myShare}/> */}
             <Drawer.Screen name="WebBrowserScreen" component={WebBrowserScreen}/>
             <Drawer.Screen name="PDFScreen" component={PDFScreen}/>
              <Drawer.Screen name="AboutScreen" component={AboutScreen}/>
              <Drawer.Screen name="DetailsScreen" component={DetailsScreen}/>

      </Drawer.Navigator>      
    </NavigationContainer>

  );
};

export default AppMain;






































// import * as React from 'react';
// import HomeScreen from './HomeScreen';
// import { View, Dimensions } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';

// const FirstRoute = ({HomeScreen}) => (
//   <View style={{ height: 640, backgroundColor: '#ff4081' }} />
// );

// const SecondRoute = () => (
//   <View style={{ height: 600, backgroundColor: '#673ab7' }} />
// );
// const ThirdRoute = () => (
//   <View style={{ height: 600, backgroundColor: '#14e5' }} />
// );

// export default function App() {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'first', title: 'First' },
//     { key: 'second', title: 'Second' },
//     { key: 'third', title: 'Third' },   


//   ]);

//   const renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
//     third: ThirdRoute,

//   });

//   return (
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={{
//         width: Dimensions.get('window').width
//       }}
//     />
//   );
// }

 



































// import React,  { Component, useEffect } from 'react';

// import{ View, Text, StyleSheet, } from 'react-native';

// import { GoogleSignIn, GoogleSignInButton, statusCodes } from '@react-native-community/google-signin';


// const App = () => {

// const _signIn = async () => {

//   GoogleSignIn.configure({
//   scopes: [], 
//   webClientId: '229141821247-a9ak1l1qlhig8fer9rh0d36h3pq2mpn0.apps.googleusercontent.com',
//   offlineAccess: true,
// });

// try {
//   await GoogleSignIn.hasPlayServices();
//   const userInfo = await GoogleSignIn.signIn ();
//   console.log ("userInfo" , userInfo)

// } catch (error)  {
//   console.log (error)

//   if (error.code === statusCodes.SIGN_IN_CANCELLED){

//   } else if (error.code === statusCodes.IN_PROGRESS){

//   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

//   } else {

//   }

// };
// return (
// <View style={StyleSheet.container}>
//   <Text style={{fontWeight: 'bold', marginTop: 20, fontSize:17}}>
//     Siign in mahesh
//   </Text>
//   <GoogleSignInButton
//   style={{ width: 192, height:40}}
//   size={GoogleSignInButton.Size.Wide}
//   color={GoogleSignInButton.color.Dark}
//   onPress={_signIn}>

//   </GoogleSignInButton>
// </View>
// );
// };
// };