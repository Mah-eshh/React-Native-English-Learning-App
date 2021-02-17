import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from '../assets/myLog1.png'
export default function AboutScreen() {
  return (
    <View style={styles.container}>
       <Image source={logo} style={{ width: 100, height: 100 }} /> 
<Text style={styles.app}> Smart English Learning App </Text>
          
      <Text style={styles.instructions} >
    Smart   English  learning  app  brings  together  all of  your  favourite  lessons and  presenters in  one fantastic, simple-to-use package. It's the best way to keep your English up to date!
    You want to study  grammar, improve  your vocabulary,  develop  your English  through  topical  new stories or learn  the phrases  to u se  in your  everyday  conversations, our  app  has  the  series for you. 
    The best way  to learn a language to is to  practice a little bit  every day. Our  app helps you do that with daily updates of  amazing, fun and topical lessons,  Watch  your English grow !
      </Text>

      <Text style={styles.Feature}> Features that will help you learn
          </Text>
      <Text style={styles.featureTxt}>
  Audio  programmes,  PDF files  and essential web  sites  that you can  download and visit  so that you  can listen to  them  as  often  as  you  need  you  have  an  internet connection.
</Text>
     <View>
     
  <Text style ={styles.textContact}>
     Contact Us </Text>
     <Text style ={styles.textContact2}>
     If  you  have  any  questions  or suggestions  about  my  app   do not  hesitate  to contact me at </Text>
      </View> 

      <Text style ={styles.email}>
      🔵 maheshpabeykoon@gmail.com</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
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
    fontSize: 17,
    marginHorizontal: 16,
    justifyContent:"space-between",
  }, 
  Feature:{
    color:'#48d1cc',
    fontSize: 16,
    padding:10,
    alignItems:'flex-start',
    justifyContent:"flex-start",
    marginHorizontal: 15,
  },
    app:{
    color:'#40e0d0',
    fontSize: 18,
    padding:10,
    alignItems:'flex-start',
    justifyContent:"flex-start",
    marginHorizontal: 15,
  },
  featureTxt: {
    fontSize: 15,
    color:'#808080',
    marginHorizontal: 15,
  },
  textContact:{
    color:'#db7093',
    fontSize:15,
    padding:15
  },
   textContact2:{
    color:'#008080',
    fontSize:15,
    marginHorizontal: 16,
  },
    email: {
    color:'#87cefa',
    padding:5,
     alignItems:'flex-start',
    justifyContent:"flex-start",
    marginHorizontal: 15,
  },
});
