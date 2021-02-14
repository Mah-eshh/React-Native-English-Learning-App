import * as React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

class Welcome extends React.Component {
  animatedValues = [];
  animations = [];
  constructor(props) {
    super(props);

    const textArr = props.content.trim().split(' ');
    textArr.forEach((_, i) => {
      this.animatedValues[i] = new Animated.Value(0);
    });
    this.textArr = textArr;
  }

  componentDidMount() {
    this.animate(1);
  }

  componentWillUnmount() {
    this.animate(0)
  }

  animate(toValue = 5) {
    this.toValue = toValue
    this.animations = this.textArr.map((_, i) => {
      return Animated.timing(this.animatedValues[i], {
        toValue,
        duration: this.props.duration,
        useNativeDriver: true

      });
    });
    Animated.stagger(this.props.timing / 5, toValue === 0 ? this.animations.reverse() : this.animations).start(() => {
      setTimeout(() => this.animate(toValue === 0 ? 1 : 0), 1000)
      if (this.props.onFinish) {
        this.props.onFinish(toValue === 1);
        
      }
    });
  }

  render() {
    return (
      <View style={[this.props.style, styles.textWrapper]}>
        {this.textArr.map((word, index) => {
          return (
            <Animated.Text
              key={`${word}-${index}`}
              style={[
                this.props.textStyle,
                styles.textStyle,
                {
                  opacity: this.animatedValues[index],
                  transform: [
                    {
                      translateY: Animated.multiply(
                        this.animatedValues[index],
                        
                        new Animated.Value(-2)
                      ),
                    },
                  ],
                },
              ]}>
              
              {word}
              {`${index < this.textArr.length ? ' ' : ''}`}
              
            </Animated.Text>
          );
        })}
      </View>
    );
  }
}

Welcome.defaultProps = {
  timing:900,
  content: '',
};

export default Welcome;

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
  
  },
});
