import * as React from 'react';
import { StatusBar, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import TextAnimator from './Welcome';
import { useFonts } from 'expo-font';

export default class HomeScreen extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        <TextAnimator 
          content="Smart English App " 
          textStyle={styles.textStyle1}
          style={styles.containerStyle1}
          timing={3000}
          onFinish={ this.Finish1}
        />
         <TextAnimator 
          content="Study everyday" 
          textStyle={styles.textStyle2}
          style={styles.containerStyle2}
          timing={1000}
          onFinish={ this.Finish2}
          
        />
        <TextAnimator 
          content="created by maheSh" 
          textStyle={styles.textStyle3}
          style={styles.containerStyle3}
          timing={2000}
          onFinish={ this.Finish3}
          
        />
      </View>
    );
  }       
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#87ceeb',
    padding: 8,
    
  },
  containerStyle1: {},
  textStyle: {
    fontSize: 40,
    color: '#191970', 
    marginBottom: 14
  },
   textStyle1: {
    fontSize: 45,
    color: '#008080', 
    marginBottom: 5
  },
   textStyle2: {
    fontSize: 25,
    color: '#696969', 
    marginBottom: 5,
    padding:5
  },
     textStyle3: {
    fontSize: 20,
    color: '#4682b4', 
   
  },
});
