import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import Note from './note';

export default class WritingScreen extends React.Component {

    state = {
        noteArray: [],
        noteText: '',
    }
  render() {

      Let: notes = this.state.noteArray.map((val, key) => {
          return <Note key={key} mahesh={key} val={val} deleteMethod={ ()=> this.deleteNote(key)} />
      });

      return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerT}> - MY NOTES - </Text>
                <Text style={styles.headerT2}>  This is just like your writing book. But it has been created without saving any data(maheSh)</Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                {notes}
            </ScrollView>
            <View style={styles.footerr}>
                <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.Buttom}>
                    <Text style={styles.ButtomText}>+</Text>
                </TouchableOpacity>
                <TextInput style={styles.textInput}
                  onChangeText={(noteText) => this.setState({noteText})} value={this.state.noteText}
                  placeholder='> Write here' placeholderTextColor='#f0f8ff' underlineColor='transparent'>
                </TextInput>
            </View>
        </View>
      );
    }
    addNote(){
        if(this.state.noteText){
          var data = new Date();
          
          if(data.getMonth() <= 9){
              var sep = "/0";
          }

          this.state.noteArray.push( {date: data.getDate() + sep + data.getMonth() + "/" + data.getFullYear(), 'note': this.state.noteText} );
          this.setState({ 'noteArray': this.state.noteArray})
          this.setState({ 'noteText': ''  });
        }
    }
    deleteNote(key){
      this.state.noteArray.splice(key, 1);
      this.setState({'noteArray': this.state.noteArray});
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: '#87cefa',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  headerT:{
    color: '#010b65',
    fontSize: 18,
    padding: 26,
  },
   headerT2:{
    color: '#191970',
    fontSize: 8,
    justifyContent:'flex-start',
    alignItems:'flex-start'
    
  },
  scrollContainer:{
    flex: 1,
    marginBottom: 100,
  },
  footerr:{
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  Buttom:{
    backgroundColor: '#dda0dd',
    width: 80,
    height: 80,
    borderRadius: 50,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45, 
    zIndex: 10,
  },
  ButtomText:{
    color: '#010b65',
    fontSize: 24,
  },
  textInput:{
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 76,
    backgroundColor: '#4682b4',
    borderTopWidth: 2,
    borderTopColor: '#010b65',
  },
});
