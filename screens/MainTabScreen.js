import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../home/HomeScreen';
import DetailsScreen from './DetailsScreen';
import ReadingScreen from '../special/Reading/ReadingScreen';
// import AbeykoonScreen from './AbeykoonScreen';
import ListeningScreen from '../drawer/listing/ListeningScreen';
import WritingScreen from '../drawer/notepad/WritingScreen';
import SpeakingPractice from '../timer/SpeakingPractice';

const HomeStack = createStackNavigator();
const ListeningStack = createStackNavigator();
const ReadingStack = createStackNavigator();
const AbeykoonStack = createStackNavigator();
const WritingStack = createStackNavigator();
const SpeakingStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#0096ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Listening"
        component={ListeningStackScreen}
        options={{
          tabBarLabel: 'Listening',
          tabBarColor: '#1f60ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-headset" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Reading"
        component={ReadingStackScreen}
        options={{
          tabBarLabel: 'Reading',
          tabBarColor: '#000080',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Write"
        component={WritingStackScreen}
        options={{
          tabBarLabel: 'Wirting',
          tabBarColor: '#008080',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-pencil" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="mahesh"
        component={SpeakingStackPractice}
        options={{
          tabBarLabel: 'Speaking',
          tabBarColor: '#c71585',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-timer-outline" color={color} size={26} />
          ),
        }}
      />
    
    </Tab.Navigator>
    
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#0096ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'HOME',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#0096ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);

const ListeningStackScreen = ({navigation}) => (
<ListeningStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <ListeningStack.Screen name="Listening" component={ListeningScreen} options={{
        title: 'LISTENING',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</ListeningStack.Navigator>
);

const ReadingStackScreen = ({navigation}) => (
<ReadingStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#000080',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <ReadingStack.Screen name="pro" component={ReadingScreen} options={{
        title:'READING',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#000080" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</ReadingStack.Navigator>
);
  
const WritingStackScreen = ({navigation}) => (
<WritingStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#008080',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <WritingStack.Screen name="pro2" component={WritingScreen} options={{
        title:'WRITING',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#008080" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</WritingStack.Navigator>
);

const SpeakingStackPractice = ({navigation}) => (
<SpeakingStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#c71585',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <SpeakingStack.Screen name="Speaking" component={SpeakingPractice} options={{
        title:'SPEAKING',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#c71585" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</SpeakingStack.Navigator>


);


