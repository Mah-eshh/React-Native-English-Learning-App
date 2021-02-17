
import * as React from 'react';
import { StatusBar, Image, FlatList, Dimensions, Animated, Text, View, StyleSheet, SafeAreaView, } from 'react-native';
const { width } = Dimensions.get('screen');
import { EvilIcons } from '@expo/vector-icons';
import { FlingGestureHandler, Directions, State, } from 'react-native-gesture-handler';

const READING_DATA = [
 
  {
    title: 'Tenses',
  
    poster: 'https://lessonsforenglish.com/wp-content/uploads/2020/10/12-Tenses-and-36-Example-Sentences.png',
  },
  {
    title: 'Conjunction',

    poster: 'https://englishgrammarhere.com/wp-content/uploads/2020/07/20-Sentences-of-Conjunction-Definition-and-Example-Sentences.png',
  },
   {
    title: 'Abbreviations',

    poster: 'https://englishgrammarhere.com/wp-content/uploads/2019/07/Internet-Abbreviations-1.png',
  },
  
 {
    title: 'Abbreviations 2',
  
    poster: 'https://lessonsforenglish.com/wp-content/uploads/2019/12/Instagram-Abbreviations.png',
  },

 {
    title: 'Prepositions',

    poster: 'https://lessonsforenglish.com/wp-content/uploads/2020/06/80-Prepositions-List-and-Example-Sentences.png',
  },

  {
    title: 'Prepositional phrases',

    poster: 'https://englishgrammarhere.com/wp-content/uploads/2020/09/Prepositional-Phrases-List-and-Examples.png',
  },

  {
    title: 'Time Expressions',

    poster: 'https://lessonsforenglish.com/wp-content/uploads/2020/11/17-Time-Expressions-Words-and-Example-Sentences.png',
  },
  {
    title: 'Articles A & An',

    poster: 'https://i.pinimg.com/originals/1c/d8/54/1cd85446032b9de0d04894d28928c6c2.jpg',
  },
  {
    title: 'Modals',

    poster:'https://lessonsforenglish.com/wp-content/uploads/2019/12/Modal-Verbs-of-Permission.png',
  },
  {
    title: 'Using HAVE in English',

    poster: 'https://lessonsforenglish.com/wp-content/uploads/2020/05/Uses-HAVE-in-English-Positive-Negative-and-Question-Forms.png',
  },
  {
    title: "Using 'Tell'",

    poster: 'https://lessonsforenglish.com/wp-content/uploads/2020/06/Collocations-with-TELL-and-Example-Sentences.png',
  },
   {
    title: "Using 'Time'",
    poster: 'https://lessonsforenglish.com/wp-content/uploads/2020/06/Collocations-with-TIME-and-Example-Sentences.png',
  },
     {
    title: "Using 'Until'",
    poster: 'https://lessonsforenglish.com/wp-content/uploads/2020/05/Uses-Until-Definition-and-6-Example-Sentences.png',
  },
   {
    title: "Little and Few",
    poster: 'https://lessonsforenglish.com/wp-content/uploads/2020/06/Uses-A-little-Little-A-few-Few-Definition-and-Example-Sentences.png',
  },
  
];

const HEIGHT = 55;
const SPACE = 10;
const my_item_width = width * 0.76;
const my_item_height = my_item_width * 1.7;
const visible = 3;
const Items = ({ data, scrollXAnimated }) => {
  const inputRange = [-1, 0, 1];
  const translateY = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [HEIGHT, 0, -HEIGHT],
  });
  return (
    <View style={styles.overflowContainer}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <Text style={[styles.title]} numberOfLines={1}>
                {item.title}
              </Text>
              <View style={styles.itemContainerRow}>
              </View>
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default function ReadingScreen() {
  const [data, setData] = React.useState(READING_DATA);
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);
  const setActiveIndex = React.useCallback((activeIndex) => {
    scrollXIndex.setValue(activeIndex);
    setIndex(activeIndex);
  });

  React.useEffect(() => {
    if (index === data.length - visible - 1) {
      
      const newData = [...data, ...data];
      setData(newData);
    }
  });

  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  return (
    <FlingGestureHandler
      key='left'
      direction={Directions.LEFT}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (index === data.length - 1) {
            return;
          }
          setActiveIndex(index + 1);
        }
      }}
    >
      <FlingGestureHandler
        key='right'
        direction={Directions.RIGHT}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            setActiveIndex(index - 1);
          }
        }}
      >
        <SafeAreaView style={styles.container}>
          <StatusBar hidden />
          <Items data={data} scrollXAnimated={scrollXAnimated} />
          <FlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            horizontal
            inverted
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              padding: SPACE * 2,
              marginTop: 50,
            }}
            scrollEnabled={false}
            removeClippedSubviews={false}
            CellRendererComponent={({
              item,
              index,
              children,
              style,
              ...props
            }) => {
              const newSt = [style, { zIndex: data.length - index }];
              return (
                <View style={newSt} index={index} {...props}>
                  {children}
                </View>
              );
            }}
            renderItem={({ item, index }) => {
              const inputRange = [index - 1, index, index + 1];
              const translateX = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [50, 0, -100],
              });
              const scale = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [0.8, 1, 1.3],
              });
              const opacity = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [1 - 1 / visible, 1, 0],
              });

              return (
                <Animated.View
                  style={{
                    position: 'absolute',
                    left: -my_item_width / 2,
                    opacity,
                    transform: [
                      {
                        translateX,
                      },
                      { scale },
                    ],
                  }}
                >
                  <Image
                    source={{ uri: item.poster }}
                    style={{
                      width: my_item_width,
                      height: my_item_height,
                      borderRadius: 14,
                    }}
                  />
                </Animated.View>
              );
            }}
          />
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -1,
  },

  itemContainer: {
    height: HEIGHT,
    padding: SPACE * 2,
  },
 
  overflowContainer: {
    height: HEIGHT,
    overflow: 'hidden', 
  },
});

