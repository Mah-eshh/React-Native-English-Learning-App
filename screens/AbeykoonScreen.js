import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AbeykoonScreen = () => {
    return (
      <View style={styles.container}>
        <Text> Abey screen </Text>
        <Button
          title="Click b Here"
          onPress={() => alert('Button Clicked!')}
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
