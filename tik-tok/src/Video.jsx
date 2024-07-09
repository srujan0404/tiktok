import React, { useEffect, useRef } from 'react'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'
import './Video.css'


function Video(props) {

	const { url, channel, description, song, likes, shares, messages } = props
	const videoRef = useRef(null)

	const onVideoPress = () => {
		if (videoRef.current.paused) {
			videoRef.current.play()
		} else {
			videoRef.current.pause()
		}
	}


	return (
		<div className="video">
			<video
				className="player"
				onClick={onVideoPress}
				ref={videoRef}
				loop
				muted
				src={url}
			></video>
			<div className="bottom-controls">
				<FooterLeft channel={channel} description={description} song={song} />
				<FooterRight likes={likes} shares={shares} messages={messages} />
			</div>
		</div>
	)
}
export default Video;