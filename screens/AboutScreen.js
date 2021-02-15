import React from 'react';
import { View, Text, Button, StyleSheet,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AboutScreen = ({navigation}) =>{
  return (
    <View style={styles.fj}>
      <View style={styles.forme}>
        <Text style={styles.aboutdetails}>
               

               
        </Text> 
      <View style={styles.email}>
          <View > 
          <Text >
              
            
          </Text>
          <Text >
            
            
          </Text>
          </View>
          </View>
      </View>   

    
  
      <View style={styles.backB}>
         
                
                
               <Ionicons 
               title= "Go back"
               label="dfgd"
               onPress={() => navigation.goBack()}
               name="md-arrow-back" size={24} 
              color='#000080' />
             

      </View>


    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignContent:'flex-end',
    justifyContent: 'flex-end',
  },fj:{
    backgroundColor:'#4FF',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },backB:{
    //flex:1,
    padding:10,
    height:40,
    width:350,
  },inputbox:{
    backgroundColor:'white',
    width:250,
    height:35,
  },aboutdetails:{
    fontSize:18,
    color:'#33332E',
    padding:10,
    
  },forme:{
    padding:40,

  },
  email:{
    alignItems:'flex-end',
    //backgroundColor:'red'
  }
  
      
 

});