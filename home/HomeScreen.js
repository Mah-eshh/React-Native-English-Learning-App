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
          content="Your are welcome to smart English App " 
          textStyle={styles.textStyle}
          style={styles.containerStyle}
          timing={500}
          onFinish={ this._onFinish }
        />
         <TextAnimator 
          content="maheSH" 
          textStyle={styles.textStyle}
          style={styles.containerStyle}
          timing={6000}
          onFinish={ this._onFinish }
          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#87ceeb',
    padding: 8,
    
  },
  containerStyle: {},
  textStyle: {
    fontSize: 40,
    color: '#191970', 
    marginBottom: 14
  },
});
