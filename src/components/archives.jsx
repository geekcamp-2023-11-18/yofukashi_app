import "./archives.css";

const archives = ({onChildEvent}) => {
	const month = 11;
	const total_time = 31;

	const clickVideo = (url) => {
		onChildEvent(url);
	}

	return (
		<>
			<div id='block'>
				<h1 className='month'>{month}月</h1>
				<div className='day-list'>
					<div>
						<h2 className='day'>1日</h2>
						<div className="wrapper">
							<div className='li-item'>
								<video src="https://firebasestorage.googleapis.com/v0/b/nightgroove-992a3.appspot.com/o/test%2FVID_20231029_000346.mp4?alt=media&token=a2eddb96-43fe-4950-a948-8856b100a743" onClick={() => clickVideo("https://firebasestorage.googleapis.com/v0/b/nightgroove-992a3.appspot.com/o/test%2FVID_20231029_000346.mp4?alt=media&token=a2eddb96-43fe-4950-a948-8856b100a743")} disablePictureInPicture></video>
							</div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
					<h2 className='day'>2日</h2>
					<div className="wrapper">
						<div className='li-item'></div>
						<div className='li-item'></div>
						<div className='li-item'></div>
						<div className='li-item'></div>
						<div className='li-item'></div>
						<div className='li-item'></div>
					</div>
					<h2 className='day'>3日</h2>
					<div className="wrapper">
						<div className='li-item'></div>
						<div className='li-item'></div>
						<div className='li-item'></div>
						<div className='li-item'></div>
						<div className='li-item'></div>
						<div className='li-item'></div>
					</div>
					<h2 className='day'>4日</h2>
					<div className="wrapper">
						<div className='li-item'></div>
						<div className='li-item'></div>
						<div className='li-item'></div>
						<div className='li-item'></div>
						<div className='li-item'></div>
						<div className='li-item'></div>
					</div>
				</div>
			</div>


		</>
	);
}

export default archives;