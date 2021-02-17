import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('screen');

const data = [
    'https://lessonsforenglish.com/wp-content/uploads/2019/12/100-Most-Common-Phrasal-Verbs-List.png',
    'https://lessonsforenglish.com/wp-content/uploads/2019/12/Most-Common-Phrasal-Verbs-List.png', 
    'https://lessonsforenglish.com/wp-content/uploads/2019/12/200-IELTS-Words-You-Need-to-Know.png',
    'https://lessonsforenglish.com/wp-content/uploads/2019/12/Adjectives-List-Adjectives-Vocabulary-Word-List-.png',
    'https://lessonsforenglish.com/wp-content/uploads/2019/12/Verbs-Followed-By-GERUNDS.png',
    'https://lessonsforenglish.com/wp-content/uploads/2021/01/Adverbs-of-Place-Definition-and-36-Example-Words.png',
    'https://lessonsforenglish.com/wp-content/uploads/2019/12/Synonym-Words-Pretty-English-Vocabulary.png',
    'https://lessonsforenglish.com/wp-content/uploads/2020/02/Synonym-Words-with-STRONG.jpg',
    'https://lessonsforenglish.com/wp-content/uploads/2019/12/Silent-Letters-List.png',
    'https://lessonsforenglish.com/wp-content/uploads/2019/12/Homonym-Words.png',
    'https://lessonsforenglish.com/wp-content/uploads/2020/06/360-Synonyms-Words-List-in-English.png',
    
    'https://lessonsforenglish.com/wp-content/uploads/2020/04/Irregular-Plurals-Singular-and-Plural.png',
    'https://lessonsforenglish.com/wp-content/uploads/2020/05/160-Synonym-Words-List-in-English.png',
];
 

const imageWidth = width * 0.8;
const imageHi = imageWidth * 1.65;

export default () => {
    const scroll = React.useRef(new Animated.Value(0)).current;

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
                    const opacity = scroll.interpolate({
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
                    [{nativeEvent: {contentOffset: {x: scroll }}}],
                    { useNativeDriver: true}
                )}
                keyExtractor={(_, index) => index.toString ()}
                horizontal
                pagingEnabled
                renderItem={({item}) => {
                    return <View style={{width, justifyContent: 'center', alignItems: 'center',
                    shadowColor: '#000',
                    shadowOpacity: .2,
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowRadius:20
                    }}>
                        <Image source={{uri: item}} style={{
                            width: imageWidth,
                            height: imageHi,
                            resizeMode: 'cover',
                            borderRadius:16
                        }}/>
                    </View>
                }}  
                />   
        </View>


    );
};