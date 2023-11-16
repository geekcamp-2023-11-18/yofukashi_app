import { useEffect } from "react";
import "./archives.css";

const archives = ({ onChildEvent }) => {
	const month = 11;
	const total_time = 31;

	const clickVideo = (url) => {
		onChildEvent(url);
	}

	return (
		<>
			<div id='block'>
				<div className="container">
					<select className="SelectYear">
						<option value="">年を選択</option>
						<option>2020</option>
						<option>2021</option>
						<option>2022</option>
						<option>2023</option>
						<option>2024</option>
						<option>2025</option>
						<option>2026</option>
						<option>2027</option>
						<option>2028</option>
						<option>2029</option>
						<option>2030</option>
					</select>
				</div>
				<h1 className='month'>9月</h1>
				<div className='day-list'>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>12日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'>
								<video onClick={() => clickVideo("https://firebasestorage.googleapis.com/v0/b/nightgroove-992a3.appspot.com/o/test%2FIMG_9874.MOV?alt=media&token=4d502635-4fa1-4526-a0d5-4603073b3df4")} disablePictureInPicture src="https://firebasestorage.googleapis.com/v0/b/nightgroove-992a3.appspot.com/o/test%2FIMG_9874.MOV?alt=media&token=4d502635-4fa1-4526-a0d5-4603073b3df4"></video>
							</div>
							<div className='li-item'>
								<video onClick={() => clickVideo("https://firebasestorage.googleapis.com/v0/b/nightgroove-992a3.appspot.com/o/test%2Fcrayz01.mov?alt=media&token=dd21d6bf-8bb7-43da-9023-e23473ae1030")} disablePictureInPicture src="https://firebasestorage.googleapis.com/v0/b/nightgroove-992a3.appspot.com/o/test%2Fcrayz01.mov?alt=media&token=dd21d6bf-8bb7-43da-9023-e23473ae1030"></video>
							</div>
							<div className='li-item'>
								<video onClick={() => clickVideo("https://firebasestorage.googleapis.com/v0/b/nightgroove-992a3.appspot.com/o/test%2Fcrayz02.mov?alt=media&token=831b2bca-bcdc-40ca-b537-8cb4d35979f2")} disablePictureInPicture src="https://firebasestorage.googleapis.com/v0/b/nightgroove-992a3.appspot.com/o/test%2Fcrayz02.mov?alt=media&token=831b2bca-bcdc-40ca-b537-8cb4d35979f2"></video>
							</div>
						</div>
						<h2 className='total-time'>合計時間:4時間</h2>
					</div>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>29日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'>
								<img onClick={() => clickVideo("https://firebasestorage.googleapis.com/v0/b/nightgroove-992a3.appspot.com/o/test%2Fcrayz02.mov?alt=media&token=831b2bca-bcdc-40ca-b537-8cb4d35979f2")} disablePictureInPicture src="https://firebasestorage.googleapis.com/v0/b/nightgroove-992a3.appspot.com/o/test%2F20231116_025955200.jpg?alt=media&token=d6e9a03a-7dfb-400b-9c4b-ca46c4a063ce"></img>
							</div>
							<div className='li-item'>
								<img onClick={() => clickVideo("https://firebasestorage.googleapis.com/v0/b/nightgroove-992a3.appspot.com/o/test%2Fcrayz02.mov?alt=media&token=831b2bca-bcdc-40ca-b537-8cb4d35979f2")} disablePictureInPicture src="https://firebasestorage.googleapis.com/v0/b/nightgroove-992a3.appspot.com/o/test%2F20231116_030418673.jpg?alt=media&token=71ce4b79-bcfc-4b4d-b0bc-2dac85554336"></img>
							</div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
				</div>
			</div>

			<div id='block'>

				<h1 className='month'>10月</h1>
				<div className='day-list'>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>1日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>7日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>19日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>27日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
				</div>
			</div>

			<div id='block'>

				<h1 className='month'>11月</h1>
				<div className='day-list'>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>1日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>7日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>19日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
					<div className="day-block">
						<div>
							<div className="line">
								<h2 className='day'>27日</h2>
							</div>
						</div>
						<div className="wrapper">
							<div className='li-item'></div>
							<div className='li-item'></div>
							<div className='li-item'></div>
						</div>
						<h2 className='total-time'>合計時間:{total_time}時間</h2>
					</div>
				</div>
			</div>


		</>

	);
}

export default archives;