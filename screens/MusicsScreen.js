import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Audio } from 'expo-av'

const MyAudioBookPlaylist = [
	{
		title: 'Alone',
		author: 'Alan Walker',
		source: 'Listening Practice',
		uri: 'https://firebasestorage.googleapis.com/v0/b/zinc-fusion-302607.appspot.com/o/mp3%2Falan-walker-alone.mp3?alt=media&token=a93dffd2-af08-4abc-b3e3-34ff0cb49409',
			},
	{
		title: 'My Heart Will Go On',
		author: 'Titanic',
		source: 'Listening Practice',
		uri: 'https://firebasestorage.googleapis.com/v0/b/zinc-fusion-302607.appspot.com/o/Titanic-My-Heart-Will-Go-On-GrandBD-Tk-(grandbd.wapkiz.com).mp3?alt=media&token=31f548d9-a410-4d37-ba4d-192870e0e47d',
	},
	{
		title: 'Sacrifice',
		author: 'Elton John ',
		source: 'Listening Practice',
		uri:
			'https://firebasestorage.googleapis.com/v0/b/zinc-fusion-302607.appspot.com/o/Elton%20John%20-%20Sacrifice%20%F0%9F%8E%B5.mp3?alt=media&token=747975c9-dda8-45f8-8b44-b8b5f3ca6ce0',
		},
	{
		title: 'Country Roads',
		author: 'John Denver',
		source: 'Listening Practice',
		uri: 'https://firebasestorage.googleapis.com/v0/b/zinc-fusion-302607.appspot.com/o/John%20Denver%20%E2%99%A5%20Take%20Me%20Home%2C%20Country%20Roads%20(The%20Ultimate%20Collection)%20with.mp3?alt=media&token=9ff2bfac-ee72-4e1d-bfc9-8601354c90d0',
		
	},
	{
		title: 'Love me like you do',
		author: 'Ellie Goulding',
		source: 'Listening Practice',
		uri:
			'https://firebasestorage.googleapis.com/v0/b/zinc-fusion-302607.appspot.com/o/mp3%2Flove-me-like-you-do.mp3?alt=media&token=1a76543f-3171-4870-9fca-4d82239c3042',
		},
	{
		title: 'Let me love you',
		author: 'Justin',
		source: 'Listening Practice',
		uri:
			'https://firebasestorage.googleapis.com/v0/b/zinc-fusion-302607.appspot.com/o/mp3%2Flet-me-love-you.mp3?alt=media&token=d6baa5ea-4375-4f32-816f-a0bd27863ae7',	}
]
export default class  MusicsScreen extends React.Component {
	state = {
		isPlaying: false,
		playbackInstance: null,
		currentIndex: 0,
		volume: 1.0,
		isBuffering: true
	}
	async componentDidMount() {
		try {
			await Audio.setAudioModeAsync({
				allowsRecordingIOS: false,
				interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
				playsInSilentModeIOS: true,
				interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
				shouldDuckAndroid: true,
				staysActiveInBackground: true,
				playThroughEarpieceAndroid: true
			})

			this.loadAudio()
		} catch (e) {
			console.log(e)
		}
	}

	async loadAudio() {
		const { currentIndex, isPlaying, volume } = this.state

		try {
			const playbackInstance = new Audio.Sound()
			const source = {
				uri: MyAudioBookPlaylist[currentIndex].uri
			}

			const status = {
				shouldPlay: isPlaying,
				volume: volume
			}
			playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackUpdate)
			await playbackInstance.loadAsync(source, status, false)
			this.setState({
				playbackInstance
			})
		} catch (e) {
			console.log(e)
		}
	}

	onPlaybackUpdate = status => {
		this.setState({
			isBuffering: status.isBuffering
		})
	}

	handlePlayPause = async () => {
		const { isPlaying, playbackInstance } = this.state
		isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()

		this.setState({
			isPlaying: !isPlaying
		})
	}

	handlePreviousTrack = async () => {
		let { playbackInstance, currentIndex } = this.state
		if (playbackInstance) {
			await playbackInstance.unloadAsync()
			this.setState({
				currentIndex : (currentIndex === 0 ? MyAudioBookPlaylist.length -1 : currentIndex-1)
			});
			this.loadAudio()
		}
	}

	handleNextTrack = async () => {
		let { playbackInstance, currentIndex } = this.state
		if (playbackInstance) {
			await playbackInstance.unloadAsync()
			this.setState({
				currentIndex: (currentIndex+1 > MyAudioBookPlaylist.length - 1 ? 0 : currentIndex+1)
			});
			this.loadAudio()
		}
	}

	renderFileInfo() {
		const { playbackInstance, currentIndex } = this.state
		return playbackInstance ? (
			<View style={styles.trackInfo}>
				<Text style={[styles.trackInfoText, styles.largeText]}>
					{MyAudioBookPlaylist[currentIndex].title}
				</Text>
				<Text style={[styles.trackInfoText, styles.smallText]}>
					{MyAudioBookPlaylist[currentIndex].author}
				</Text>
				<Text style={[styles.trackInfoText, styles.smallText]}>
					{MyAudioBookPlaylist[currentIndex].source}
				</Text>
			</View>
		) : null
	}

	render() {
		return (
			<View style={styles.container}>
			<Text style={styles.txt} >  Learn English with Songs  </Text>
				<Image
					style={styles.albumCover}
					source={{ uri: 'https://image.winudf.com/v2/image/Y29tLmJ1ZmZhbG8uc29mdHdhcmUuZW5nbGlzaGxpc3RlbmluZ19pY29uX3NxbXhtZW1v/icon.png?w=&fakeurl=1' }}
				/>
				<View style={styles.controls}>
					<TouchableOpacity style={styles.control} onPress={this.handlePreviousTrack}>
						<Ionicons name='ios-play-skip-back-circle' size={58} color='#444' />
					</TouchableOpacity>
					<TouchableOpacity style={styles.control} onPress={this.handlePlayPause}>
						{this.state.isPlaying ? (
							<Ionicons name='ios-pause' size={58} color='#447' />
						) : (
							<Ionicons name='ios-play-circle' size={58} color='#444' />
						)}
					</TouchableOpacity>
					<TouchableOpacity style={styles.control} onPress={this.handleNextTrack}>
						<Ionicons name='play-skip-forward-circle-sharp' size={58} color='#444' />
					</TouchableOpacity>
				</View>
				{this.renderFileInfo()}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#7896',
		alignItems: 'center',
		justifyContent: 'center'
	},
	albumCover: {
		width: 250,
		height: 250
	},
		trackInfoText: {
		textAlign: 'center',
		flexWrap: 'wrap',
		color: '#550088'
	},
	largeText: {
		fontSize: 30
	},
	smallText: {
		fontSize: 20
	},
	control: {
		margin: 20

	},
	controls: {
		flexDirection: 'row'
	},
	txt: {
		color: '#550088',
		padding: 30,
		fontSize:30
	}

})



