import React, { Component } from 'react';
import { Button, Linking, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

export default class PDFScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
<Text style={styles.app}> Free Download English PDF </Text>
   
       <TouchableOpacity 
         onPress={this._handleOpenWithWebBrowser}
          style={{ width: 280, backgroundColor: '#69d2e7', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 40 }}
          >
          <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}> Everyday Conversations  </Text>
        </TouchableOpacity>
       <TouchableOpacity 
         onPress={this._handleOpenWithWebBrowser1}
          style={{ width: 280, backgroundColor: '#a7dbd8', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 40 }}
          >
          <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}> Common Mistakes</Text>
        </TouchableOpacity>
        <TouchableOpacity 
         onPress={this._handleOpenWithWebBrowser2}
          style={{ width: 280, backgroundColor: '#e0e4cc', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 40 }}
          >
          <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Grammar Book</Text>
        </TouchableOpacity>
       <TouchableOpacity 
         onPress={this._handleOpenWithWebBrowser3}
          style={{ width: 280, backgroundColor: '#FECBCA', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 40 }}
          >
          <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}> Grammar Book 2 </Text>
        </TouchableOpacity>
      <TouchableOpacity 
         onPress={this._handleOpenWithWebBrowser4}
          style={{ width: 280, backgroundColor: '#fc9d9a', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 40 }}
          >
          <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}> Tenses explanations</Text>
        </TouchableOpacity>
        <TouchableOpacity 
         onPress={this._handleOpenWithWebBrowser5}
          style={{ width: 280, backgroundColor: '#FD5560', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 40 }}
          >
          <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}> Active and Passive </Text>
        </TouchableOpacity>

      </View>
    );
  }

    _handleOpenWithWebBrowser= () => {
    WebBrowser.openBrowserAsync('https://firebasestorage.googleapis.com/v0/b/zinc-fusion-302607.appspot.com/o/Everyday-Conversations_-Learning-American-English-learnenglishteam.com-min.pdf?alt=media&token=f0c7fa3e-aa57-46bd-9e64-6cbbbf0251d3');
  };
    _handleOpenWithWebBrowser1= () => {
    WebBrowser.openBrowserAsync('https://firebasestorage.googleapis.com/v0/b/zinc-fusion-302607.appspot.com/o/Common%20Mistakes.pdf?alt=media&token=f093a6c6-9042-47c9-9ad4-fb63fc434c6e');
  };
  
    _handleOpenWithWebBrowser2= () => {
    WebBrowser.openBrowserAsync('https://firebasestorage.googleapis.com/v0/b/zinc-fusion-302607.appspot.com/o/FreeEnglishGrammar.pdf?alt=media&token=58e1a623-4a33-4d8f-953d-d40cfabafa3d');
  };
     _handleOpenWithWebBrowser3= () => {
    WebBrowser.openBrowserAsync('https://firebasestorage.googleapis.com/v0/b/zinc-fusion-302607.appspot.com/o/Free-Grammar-Ebook-Level-2.pdf?alt=media&token=21cf821c-0cad-4e06-9206-8019067697d1');
  };
     _handleOpenWithWebBrowser4= () => {
    WebBrowser.openBrowserAsync('https://firebasestorage.googleapis.com/v0/b/zinc-fusion-302607.appspot.com/o/tenses-explanations.pdf?alt=media&token=f31e630d-ab86-4477-9b3e-e54c9eb7dfa5');
  };
     _handleOpenWithWebBrowser5= () => {
    WebBrowser.openBrowserAsync('https://firebasestorage.googleapis.com/v0/b/zinc-fusion-302607.appspot.com/o/Active%20and%20Passive%20Voice.pdf?alt=media&token=219cf070-2263-4bce-ac0e-da80842fd76d');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#191970',
  },
  button: {
    marginVertical: 10,
  },
    app:{
    color:'#778899',
    fontSize: 18,
    padding:10,
    alignItems:'flex-start',
    justifyContent:"flex-start",
    marginHorizontal: 15,
  },
  
});
