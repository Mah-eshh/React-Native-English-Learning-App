import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Entypo,MaterialCommunityIcons, FontAwesome, FontAwesome5, AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons'; 

import * as firebase from "firebase";

export function DrawerContent(props) {
 
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.mydrawerContent}>
                    <View style={styles.userInfo}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                            
                                source={require('../assets/myLog.png')}
                                size={70}/>
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.mytitle}>Smart English App 🔷</Title>
                                <Caption style={styles.mcap}>                  @maheSh</Caption>
                            </View>
                        </View>    
                         <View style={styles.mysection}>
                                
                                <Caption style={styles.mcap}>                                __________________________________</Caption>
                            </View>
                    </View>
                    <Drawer.Section style={styles.mydrawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                               <Ionicons name="home" size={30} color="black" />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                             <MaterialCommunityIcons name="human-handsup" size={30} color="black" />
                            )}
                            label="How to be Fluent ?"
                            onPress={() => {props.navigation.navigate('MaheshScreen')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                               <MaterialCommunityIcons name="book-open-page-variant" size={30} color="black" />
                            )}
                            label="12 Types of Tenses"
                            onPress={() => {props.navigation.navigate('TensesScreen')}}
                        />
                    
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialIcons name="menu-book" size={30} color="black" />
                               
                            )}
                            label="Basic English Phrases"
                            onPress={() => {props.navigation.navigate('PhrasesScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialIcons name="import-contacts" size={30} color="black" />
                            )}
                            label="Improve Vocabulary"
                            onPress={() => {props.navigation.navigate('VocabularyScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                             <Entypo name="music" size={30} color="black" />
                            )}
                            label="English Songs"
                            onPress={() => {props.navigation.navigate('MusicsScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <FontAwesome5 name="headphones" size={30} color="black" />
                            )}
                            label="Listening Practice"
                            onPress={() => {props.navigation.navigate('ListeningScreen')}}
                        />
                       
                        <DrawerItem 
                            icon={({color, size}) => (
                              <FontAwesome5 name="book-reader" size={30} color="black" />
                            )}
                            label="Reading Practice"
                            onPress={() => {props.navigation.navigate('ReadingScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                           <FontAwesome name="pencil-square-o" size={30} color="black" />
                            )}
                            label="Write Anything "
                            onPress={() => {props.navigation.navigate('WritingScreen')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                              <Entypo name="time-slot" size={30} color="black" />
                            )}
                            label="Speak with yourself "
                            onPress={() => {props.navigation.navigate('SpeakingPractice')}}
                        />
                            <DrawerItem 
                            icon={({color, size}) => (
                              <Entypo name="globe" size={30} color="black" />
                            )}
                            label="Browse Me "
                            onPress={() => {props.navigation.navigate('WebBrowserScreen')}}
                        />
                          <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons name="file-pdf-box" size={30} color="#ff0000" />
                            )}
                            label="PDF Files "
                            onPress={() => {props.navigation.navigate('PDFScreen')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons name="google-translate" size={30} color="#6495ed" />
                            )}
                            label="Google Translate "
                            onPress={() => {props.navigation.navigate('WebBrowserScreen')}}
                        />
                          <DrawerItem 
                            icon={({color, size}) => (
                                <FontAwesome5 name="medium" size={30} color="black" />
                            )}
                            label="About us"
                            onPress={() => {props.navigation.navigate('AboutScreen')}}
                        />

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.signOut}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Entypo name="log-out" size={30} color="#ff69b4" />
                    )}
                    label="Sign Out"
                   onPress={() => firebase.auth().signOut()}   
                />
            </Drawer.Section>
        </View>
    );
}
const styles = StyleSheet.create({
    mydrawerContent: {
      flex: 1,
      backgroundColor:'#f0f8ff',

    },
    userInfo: {
      paddingLeft: 18,
    },
    mytitle: {
      fontSize: 15,
      marginTop: 3,
      fontWeight: 'bold',
    },
    mcap: {
      fontSize: 14,
      lineHeight: 14,
    },
    mrow: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    mysection: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    myparagraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    mydrawerSection: {
        marginBottom: 0,
        backgroundColor: '#f0f8ff'
    },
    signOut: {
        marginBottom: 0,
        backgroundColor: '#87cefa'
    },

    // preference: {
    //   flexDirection: 'row',
    //   justifyContent: 'space-between',
    //   paddingVertical: 12,
    //   paddingHorizontal: 16,
    // },
  });
  
