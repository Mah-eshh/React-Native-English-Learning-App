import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class WritingScreen extends React.Component {
  render() {
      return (
        <View key={this.props.mahesh} style={styles.note}>

            <Text style={styles.noteT}>{this.props.val.date}</Text>
            <Text style={styles.noteT}>{this.props.val.note}</Text>

            <TouchableOpacity onPress={this.props.deleteMethod} style={styles.Delete}>
                <Text style={styles.noteDeleteT}>X</Text>
            </TouchableOpacity>

        </View>
      );
  }
}

const styles = StyleSheet.create({
    note:{
      position: 'relative',
      padding: 20,
      paddingRight: 100,
      borderBottomWidth: 2,
      borderBottomColor: '#ededed',
    },
    noteT:{
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: '#40e0d0',
    },
    Delete:{
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4682b4',

      padding: 15,
      top: 10,
      bottom: 10,
      right: 10,
    },
    noteDeleteT:{
      color: 'white',
    }
    
});
