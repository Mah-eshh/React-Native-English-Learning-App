import React, { Component } from 'react';
import { Button, Linking, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';

export default class WebBrowserScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
       <FontAwesome.Button name="youtube" 
          onPress={this.YouTube} style={{ width: 120, backgroundColor: '#ff0000', alignItems: 'center', justifyContent: 'flex-start' }}>
            Youtube</FontAwesome.Button> 
         
         <FontAwesome.Button name="google" backgroundColor="#6495ed" 
        onPress={this.Google} style={{ width: 220, backgroundColor: '#48d1cc0', alignItems: 'center', justifyContent: 'center' }}>
         Google Translate </FontAwesome.Button>

         <FontAwesome.Button name="search" 
        onPress={this.Google} style={{ width: 220, backgroundColor: '#f08080', alignItems: 'center', justifyContent: 'center' }}>
         Oxford Dictionary </FontAwesome.Button>
         
       <FontAwesome.Button name="youtube" backgroundColor="red" 
          onPress={this.YouTubeDrama} style={{ width: 220, backgroundColor: '#ff0000', alignItems: 'center', justifyContent: 'center' }}>
         English Drama series</FontAwesome.Button> 

          <FontAwesome.Button name="youtube" backgroundColor="red" 
          onPress={this.YouTubeSongs} style={{ width: 220, backgroundColor: '#ff0000', alignItems: 'center', justifyContent: 'center' }}>
         English Songs        </FontAwesome.Button> 


        
  
       <FontAwesome.Button name="wordpress" 
          onPress={this.englishGrammar} style={{ width: 220, backgroundColor: '#4b0082', alignItems: 'center', justifyContent: 'center' }}>
          English Grammar lessons
          </FontAwesome.Button>
        
       
       <FontAwesome.Button name="wordpress" 
         onPress={this.englishVocabulary} style={{ width: 220, backgroundColor: '#4b0082', alignItems: 'center', justifyContent: 'center' }}>
          English Vocabulary            </FontAwesome.Button>
        
      </View>
    );
  }

  YouTube = () => {
    Linking.openURL('https://www.youtube.com/');
  };
  YouTubeDrama = () => {
    Linking.openURL('https://www.youtube.com/'); 
  };
  YouTubeSong = () => {
    Linking.openURL('https://www.youtube.com/');
  };

  englishVocabulary = () => {
    WebBrowser.openBrowserAsync('https://www.learnenglish.de/vocabpage.html');
  };
    englishGrammar = () => {
    WebBrowser.openBrowserAsync('https://www.learnenglish.de/grammarpage.html');
  };
  
    Google = () => {
    WebBrowser.openBrowserAsync('https://translate.google.com/?hl=en');
  };
  oxford = () => {
    WebBrowser.openBrowserAsync('https://www.oxfordlearnersdictionaries.com/');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#87cefa',
  },
  button: {
    marginVertical: 10,
  },
});
