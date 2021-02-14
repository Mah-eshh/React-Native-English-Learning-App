import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Entypo,MaterialCommunityIcons, FontAwesome, FontAwesome5, AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons'; 

import * as firebase from "firebase";

export function DrawerContent(props) {
    const [isDarkTheme, setIsDarkTheme ] = React.useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme); }
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                            
                                source={require('../assets/myLog.png')}
                                size={70}/>
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Smart English App</Title>
                                <Caption style={styles.caption}>@created by _maheSh</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                               <Ionicons name="home" size={30} color="black" />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="format-text" 
                                color={color}
                                size={30}
                                />
                            )}
                            label="Basics of Tenses"
                            onPress={() => {props.navigation.navigate('TensesScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <MaterialIcons name="error" size={30} color="black" />
                            )}
                            label="common English mistakes"
                            onPress={() => {props.navigation.navigate('GMScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Entypo name="book" size={30} color="black" />
                            )}
                            label="Become Fluent in English"
                            onPress={() => {props.navigation.navigate('MaheshScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <AntDesign name="dribbble-square" size={30} color="black" />
                               
                            )}
                            label="Basic English Phrases"
                            onPress={() => {props.navigation.navigate('PhrasesScreen')}}
                        />
                          {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="Abeykoon-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Abeykoon"
                            onPress={() => {props.navigation.navigate('AbeykoonScreen')}}
                        /> */}
                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialIcons name="import-contacts" size={30} color="black" />
                            )}
                            label="Improve Vocabulary"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
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
                              <Entypo name="time-slot" size={30} color="#663399" />
                            )}
                            label="Speak with your self "
                            onPress={() => {props.navigation.navigate('SpeakingPractice')}}
                        />
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="share-outline" 
                                color={"pink"}
                                size={size}
                                />
                            )}
                            label="Share this."
                            onPress={() => {props.navigation.navigate('myShare')}}
                        /> */}
                            <DrawerItem 
                            icon={({color, size}) => (
                              <Entypo name="globe" size={30} color="black" />
                            )}
                            label="WebBrowserScreen "
                            onPress={() => {props.navigation.navigate('WebBrowserScreen')}}
                        />
                          <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons name="file-pdf-box" size={30} color="#ff0000" />
                            )}
                            label="Free PDF "
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
                            onPress={() => {props.navigation.navigate('ProfileScreen')}}
                        />

                    </Drawer.Section>

                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Entypo name="log-out" size={30} color="black" />
                    )}
                    label="Sign Out"
                   onPress={() => firebase.auth().signOut()}   
                />
            </Drawer.Section>
        </View>
    );
}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });