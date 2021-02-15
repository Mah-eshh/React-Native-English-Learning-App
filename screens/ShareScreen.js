import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

import Share from 'react-native-share';
const ShareScreen = () => {
 
  const myCustomShare = async (){
    const shareOptions = {
      message: 'This a message',
    }
      try {
        const shareOptions = await Share.open(shareOptions);
      } catch(error) {
        console.log('Error => ', error);

      }
    };
    
export default ShareScreen; 
