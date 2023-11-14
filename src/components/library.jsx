import nightsky from '../imgs/nightsky_light.jpg'
import Archives from './archives.jsx'
import Stream from './stream.jsx'
import Screen from './screen.jsx'
import './library.css'
import { useState,useRef } from 'react'

function library() {
	const [expension, isExpension] = useState(false);
	const childCompRef = useRef();
	const changeWindow = () => {
		isExpension(!expension);
	}

	const changeVideo = (url) => {
		childCompRef.current.changeVideo(url);
	}

	return (
		<>
			<img src={nightsky} className='library_background' alt='night-sky'></img>
			{!expension ?
				<div>
					<ul>
						<li><Archives onChildEvent={changeVideo}/></li>
						<li><Stream onChildEvent={changeWindow} ref={childCompRef}/></li>
					</ul>
				</div>
				:
				<Screen onChildEvent={changeWindow} />
			}
		</>
	);
}

export default library;