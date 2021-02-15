import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from '../assets/mylo.png'
export default function AboutScreen() {
  return (
    <View style={styles.container}>
       <Image source={logo} style={{ width: 100, height: 100 }} /> 

      <Text style={styles.instructions} >
       m. Robert will have been read various kinds of books.',
    '   2. You will have been shopped at that market before we come.',
    '   3. I will have been sung many songs before you join us.' ,
    '   4. I will not have  been attended the program',
    '   5. I will have been arranged all the necessary materials',
    '   6. They will have been helped him to do the task.',
    '   7. I will have been attended his class y adbdfn gvgfjf
       
      </Text>
      <Text style ={styles.txt}>
      maheshpabeykoon@gmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  }, 
  txt: {
    color:'red',
    padding:50,
    
  },

});
