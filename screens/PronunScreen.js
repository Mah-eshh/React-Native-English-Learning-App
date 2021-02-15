import { StatusBar } from 'expo-status-bar';
import React,  {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';

export default function PronunScreen() {

  const speechs = [
    'Vehical,pronunciation',
    
  ];

  const [currentSpeech, setCurrentSpeech] = useState({
    index:0,
    speaking:speechs[0],
    isStartSpeech:false
  });

  textToSpeech = (speech) => {
    Speech.speak(speech, {
      voice:'google',
      rate:.95,
      onStart:onStartSpeech,
      onDone:onDoneSpeech
    });
  };

  onStartSpeech = () => {
    setCurrentSpeech({...currentSpeech, isStartSpeech:true});
  };

  onDoneSpeech = () => {
    const index = currentSpeech.index+1 < speechs.length ? currentSpeech.index+1 : 0;
    console.log('speaking is done.');
    setCurrentSpeech({
      index,
      speaking:speechs[index],
      isStartSpeech:false
    });
  };
  

  return (
    <View style={styles.container}>
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#ff69b4', width:'100%'}}>
        <Text style={{color:'white', fontSize:25}}>{currentSpeech.speaking}</Text>
      </View>
      <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center', width:'100%', backgroundColor:currentSpeech.isStartSpeech ? '#ff69b4' : '#1e90ff'}} onPress={() => textToSpeech(currentSpeech.speaking)}><Text style={{fontSize:30, fontWeight:'bold', color:'white'}}>{currentSpeech.isStartSpeech ? 'Speaking...' : 'Speak Now'}</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#708090',
    alignItems: 'center',
    justifyContent: 'center',
  },
});