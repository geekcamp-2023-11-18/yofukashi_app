import "./screen.css"
import Close from '../imgs/arrClose.png'
import { useEffect } from "react"

const screen = ({ onChildEvent,url}) => {
	function handleClick() {
		onChildEvent();
	}

	useEffect(() => {
		const video = document.getElementById("stream-video");
		video.src = url;
	}, []);

	return (
		<>
			<div className='screen_div'>
				<div className='screen'>
					<video id="stream-video" loop autoPlay></video>
				</div>
				<img src={Close} onClick={handleClick}></img>
			</div>
		</>
	);
}
export default screen;