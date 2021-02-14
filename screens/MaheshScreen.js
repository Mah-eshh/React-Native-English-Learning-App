import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MaheshScreen = () => {
    return (
      <View style={styles.container}>
        <Text> mahesh screen </Text>
        <Button
          title="Click b Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default MaheshScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
