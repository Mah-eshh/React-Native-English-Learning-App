import React from "react";
import { TouchableOpacity, Text, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import styled from "styled-components";
import { SafeAreaView } from "react-native";
import { View } from "native-base";

const audioBookPlaylist = [{
    uri: "http://stream.falconinternet.net:8020/;mp3"}] ;
    export default class App extends React.Component {
  state = {
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: true
  };

  async componentDidMount() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: false
      });
      this.loadAudio();
    } catch (e) {
      console.log(e);
    }
  }

  async loadAudio() {
    const { currentIndex, isPlaying, volume } = this.state;

    try {
      const playbackInstance = new Audio.Sound();
      const source = {
        uri: audioBookPlaylist[currentIndex].uri
      };

      const status = {
        shouldPlay: isPlaying,
        volume: volume
      };

      playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
      await playbackInstance.loadAsync(source, status, false);
      this.setState({
        playbackInstance
      });
    } catch (e) {
      console.log(e);
    }
  }

  onPlaybackStatusUpdate = status => {
    this.setState({
      isBuffering: status.isBuffering
    });
  };

  handlePlayPause = async () => {
    const { isPlaying, playbackInstance } = this.state;
    isPlaying
      ? await playbackInstance.pauseAsync()
      : await playbackInstance.playAsync();

    this.setState({
      isPlaying: !isPlaying
    });
  };

  renderFileInfo() {
    const { playbackInstance, currentIndex } = this.state;
    return null;
  }

  render() {
    return (
      <PlayButtonContainer>
      <Button
        title="listening practice "
        color="#7743"
        
      />
     
       <Button
        title="live"
        color="#f41258ff"
      />
      <Button
        title="The best method in English"
        color="#5258"></Button>

        <TouchableOpacity onPress={this.handlePlayPause}>
          <Buttons>
            {this.state.isPlaying ? (
              <Ionicons name="ios-pause" size={64} color="#f58" />
            ) : (
              <Ionicons name="ios-play-circle" size={64} color="#fff594" />
            )}
          </Buttons>
      
        </TouchableOpacity>
      </PlayButtonContainer>
    
    
    );
  }
}

const PlayButtonContainer = styled.View`
  width: 420;
  height: 200;
  background-color: #00008b;
  text-align: center;
  justify-content: center;
  flex: 1;
`;


const Buttons = styled.Text`
  width: 395px;
  height: 64px;
  top: 15px;
  left: 13px;
  text-align: center;
`;

