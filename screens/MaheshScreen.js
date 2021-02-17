import { AntDesign } from '@expo/vector-icons';
import * as React from 'react';
import Constants from 'expo-constants';
import { StatusBar,Dimensions, TouchableOpacity, Animated, Text, View, StyleSheet, Image } from 'react-native';

const { width } = Dimensions.get('window');
const AnimAntDesign = Animated.createAnimatedComponent(AntDesign);
const TimeDURATION = 1000;
const TEXT_DURATION = TimeDURATION * 0.5;

const myquotes = [
  { 
    quote: 'Find    English Speakers  and Practice   Your   Communication    Skills',
    },
  {
    quote: 'Challenge   Yourself to Learn  Difficult Words',
  },
  {
    quote:'Listen to English Audiobooks and Podcasts',
      },
  {
    quote: 'Watch a Long-Running Show, Preferably Without Subtitles',
  },
  {
    quote:"Read   News Websites and Journals",
},
  {
    quote:'Look  for  MOOCs     in Specialized Areas to Fine-tune Your Skills',
},
 ];

const Circle = ({ onPress, index, myquotes, myanimatedValue, myanimatedValue2 }) => {
  const { initialBgColor, nextBgColor, bgColor } = colors[index];
  const inputRange = [0, 0.001, 0.5, 0.501, 1];
  const backgroundColor = myanimatedValue2.interpolate({
    inputRange,
    outputRange: [
      initialBgColor,
      initialBgColor,
      initialBgColor,
      bgColor,
      bgColor,
    ],
  });
  const dotBgColor = myanimatedValue2.interpolate({
    inputRange: [0, 0.001, 0.5, 0.501, 0.9, 1],
    outputRange: [
      bgColor,
      bgColor,
      bgColor,
      initialBgColor,
      initialBgColor,
      nextBgColor,
    ],
  });

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        styles.container,
        { backgroundColor },
      ]}>
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: dotBgColor,
            transform: [
              { perspective: 200 },
              {
                rotateY: myanimatedValue2.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0deg', '-90deg', '-180deg'],
                }),
              },
              {
                scale: myanimatedValue2.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [1, 6, 1],
                }),
              },
            ],
          },
        ]}>
        <TouchableOpacity onPress={onPress}>
          <Animated.View
            style={[
              styles.btn,
              {
                transform: [
                  {
                    scale: myanimatedValue.interpolate({
                      inputRange: [0, 0.05, 0.5, 1],
                      outputRange: [1, 0, 0, 1],
                      // extrapolate: "clamp"
                    }),
                  },
                  {
                    rotateY: myanimatedValue.interpolate({
                      inputRange: [0, 0.5, 0.9, 1],
                      outputRange: ['0deg', '180deg', '180deg', '180deg'],
                    }),
                  },
                ],
                opacity: myanimatedValue.interpolate({
                  inputRange: [0, 0.05, 0.9, 1],
                  outputRange: [1, 0, 0, 1],
                }),
              },
            ]}>
            <AnimAntDesign name='arrowright' size={35} color={'white'} />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

const colors = [
  {
    initialBgColor: '#4169e1',
    bgColor: '#222',
    nextBgColor: '#178',
  },
  {
    initialBgColor: 'goldenrod',
    bgColor: '#222',
    nextBgColor: 'yellowgreen',
  },
  {
    initialBgColor: '#222',
    bgColor: 'yellowgreen',
    nextBgColor: 'midnightblue',
  },
  {
    initialBgColor: 'yellowgreen',
    bgColor: 'midnightblue',
    nextBgColor: 'turquoise',
  },
  {
    initialBgColor: 'midnightblue',
    bgColor: 'turquoise',
    nextBgColor: 'goldenrod',
  },
  {
    initialBgColor: 'turquoise',
    bgColor: 'goldenrod',
    nextBgColor: '#222',
  },
];

export default function MaheshScreen() {
  const myanimatedValue = React.useRef(new Animated.Value(0)).current;
  const myanimatedValue2 = React.useRef(new Animated.Value(0)).current;
  const sliderAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [...Array(myquotes.length).keys()];
  const [index, setIndex] = React.useState(0);

  const animate = (i) =>
    Animated.parallel([
      Animated.timing(sliderAnimatedValue, {
        toValue: i,
        duration: TEXT_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(myanimatedValue, {
        toValue: 1,
        duration: TimeDURATION,
        useNativeDriver: true,
      }),
      Animated.timing(myanimatedValue2, {
        toValue: 1,
        duration: TimeDURATION,
        useNativeDriver: false,
      }),
    ]);

  const onPress = () => {
    myanimatedValue.setValue(0);
    myanimatedValue2.setValue(0);
    animate((index + 1) % colors.length).start();
    setIndex((index + 1) % colors.length);
  };

  return (
    <View style={{ flex:1, justifyContent: 'flex-start', paddingTop: 100 }}>
      <StatusBar hidden />
      <Circle
        index={index}
        onPress={onPress}
        myquotes={myquotes}
        myanimatedValue={myanimatedValue}
        myanimatedValue2={myanimatedValue2}
      />
      <Animated.View
        style={{
          flexDirection: 'row',
          transform: [
            {
              translateX: sliderAnimatedValue.interpolate({
                inputRange,
                outputRange:myquotes.map((_, i) => -i * width * 2),
              }),
            },
          ],
          opacity: sliderAnimatedValue.interpolate({
            inputRange: [...Array(myquotes.length * 2 + 1).keys()].map(
              (i) => i / 2
            ),
            outputRange: [...Array(myquotes.length * 2 + 1).keys()].map((i) =>
              i % 2 === 0 ? 1 : 0
            ),
          }),
        }}
      >
        {myquotes.slice(0, colors.length).map(({ quote, author }, i) => {
          return (
            <View style={{ paddingRight: width, width: width * 2 }} key={i}>
              <Text
                style={[styles.paragraph, { color: colors[i].nextBgColor }]}
              >
                {quote}
              </Text>
              <Text
                style={[
                  styles.paragraph,
                  {
                    color: colors[i].nextBgColor,
                    fontSize: 0,
                    fontWeight: 'normal',
                    textAlign: 'right',
                    opacity: 0.8,
                  },
                ]}
              >
              </Text>
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    paddingBottom: 10,
  },
  paragraph: {
    margin: 10,
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
  },
  btn: {
    height: 99,
    width: 99,
    borderRadius: 51,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: 'turquoise',
    width: 99,
    height: 99,
    borderRadius: 40,
  },
});
