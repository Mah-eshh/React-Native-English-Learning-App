import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('screen');

const data = [
    'https://lessonsforenglish.com/wp-content/uploads/2019/12/100-Most-Common-Phrasal-Verbs-List.png',
    'https://lessonsforenglish.com/wp-content/uploads/2020/05/Most-Important-Opposite-Words-List.png', 
    'https://lessonsforenglish.com/wp-content/uploads/2020/05/900-Opposite-Words-in-English-1.png',
    'https://lessonsforenglish.com/wp-content/uploads/2020/05/Basic-and-Detailed-Opposite-Words-List.png',
    'https://lessonsforenglish.com/wp-content/uploads/2020/06/360-Synonyms-Words-List-in-English.png',
    'https://lessonsforenglish.com/wp-content/uploads/2020/05/Most-Important-Opposite-Words-List.png',
    'https://lessonsforenglish.com/wp-content/uploads/2020/05/160-Synonym-Words-List-in-English.png',
    'https://lessonsforenglish.com/wp-content/uploads/2019/12/Most-Common-Phrasal-Verbs-List.png', 
    
];
 
const imageW = width * 0.8;
const imageH = imageW * 1.65;

export default () => {
    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <StatusBar hidden />
            <View
                style={StyleSheet.absoluteFillObject}
            >
                { data.map((image, index) => {
                    const inputRange = [
                        (index - 1 ) * width,
                        index * width,
                        (index + 1 ) * width
                    ]
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, 1, 0]
                    })   
                    return <Animated.Image
                    key={`image-${index}`}
                    source={{uri: image}}
                    style={[
                        StyleSheet.absoluteFillObject,
                        {
                            opacity
                        }
                    ]}
                    blurRadius={50}
                    />
                })}
            </View>
            <Animated.FlatList 
                data={data}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX  }}}],
                    { useNativeDriver: true}
                )}
                keyExtractor={(_, index) => index.toString ()}
                horizontal
                pagingEnabled
                renderItem={({item}) => {
                    return <View style={{width, justifyContent: 'center', alignItems: 'center',
                    shadowColor: '#000',
                    shadowOpacity: .5,
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowRadius:20
                    }}>
                        <Image source={{uri: item}} style={{
                            width: imageW,
                            height: imageH,
                            resizeMode: 'cover',
                            borderRadius:16
                        }}/>
                    </View>
                }}  
                />   
        </View>


    );
};