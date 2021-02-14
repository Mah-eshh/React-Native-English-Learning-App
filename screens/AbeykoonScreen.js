import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AbeykoonScreen = () => {
    return (
      <View style={styles.container}>
        <Text> This is a test and not initial yet </Text>
        <Button
          title="Click mahesh"
          onPress={() => alert('mahesh Button Clicked!')}
        />
      </View>
    );
};

export default AbeykoonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
