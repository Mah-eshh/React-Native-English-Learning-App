import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const DetailsScreen = ({navigation}) =>{
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
       <Button 
            onPress={() => navigation.push("Details")}
            title= "Go to Details">
        </Button> 
           <Text>Details Screen</Text>
       <Button 
            onPress={() => navigation.navigate("Home")}
            title= "Go to Home">
        </Button> 
           <Text>Details Screen</Text>
       <Button 
            onPress={() => navigation.goBack()}
            title= "Go back">
        </Button> 
        <Button 
            onPress={() => navigation.popToTop()}
            title= "Go the first screen">
        </Button>


    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
