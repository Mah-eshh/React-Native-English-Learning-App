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
          onPress={this.YouTube} style={{ width: 150, backgroundColor: '#FD5580', alignItems: 'center', justifyContent: 'center' }}>
         Youtube</FontAwesome.Button> 
         
         <FontAwesome.Button name="google" backgroundColor="#6495ed" 
        onPress={this.Google}>
         Google Translate </FontAwesome.Button>
         
       <FontAwesome.Button name="youtube" backgroundColor="red" 
          onPress={this.YouTubeDrama}>
         English Drama series</FontAwesome.Button> 

          <FontAwesome.Button name="youtube" backgroundColor="red" 
          onPress={this.YouTubeSongs}>
         English Songs        </FontAwesome.Button> 


        
  
       <FontAwesome.Button name="wordpress" backgroundColor="#6495ed" 
          onPress={this.englishGrammar}>
          English Grammar lessons
          </FontAwesome.Button>
        
       
       <FontAwesome.Button name="wordpress" backgroundColor="#6495ed" 
         onPress={this.englishVocabulary} style={{ width: 250, backgroundColor: '#F26', alignItems: 'center', justifyContent: 'center' }}>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ae78',
  },
  button: {
    marginVertical: 10,
  },
});
