import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({navigation}) => {
//     return (
//       <View style={styles.container}>
//         <Text>Profile Screen</Text>
//         <Button
//           title="Click Here"
//           onPress={() => alert('Button Clicked!')}
//         />
//       </View>
//     );
// };

// export default ProfileScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });


function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          // return <Ionicons name={iconName} size={size} color={color} />;
          return (
            <IconWithBadge
              badgeCount={3}
              name={iconName}
              size={size}
              color={color}
            />
          );
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }}
    >
      <Tab.Screen name="Home" component={CreatePostScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
    </Tab.Navigator>
  );
}
export default ProfileScreen;