import React, { useEffect, useState } from "react";
import "./archives.css";
import { getYearDoc } from "./firebases/firebaseConfig.jsx";

const Archives = ({ onChildEvent }) => {
  const [grouped, setGrouped] = useState([]);

  const clickVideo = (url) => {
    onChildEvent(url);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const documents = await getYearDoc("2023");
        loadingVideo(documents);
      } catch (error) {
        console.error("Error fetching documents:", error);
        // Implement error handling as needed
      }
    };

    fetchData();
  }, []);

  const loadingVideo = (documents) => {
    const contents = documents.map((doc) => {
      const date = doc.day.split("_");

      return {
        day: date[2],
        month: date[1],
        year: date[0],
        movies: doc.movie,
      };
    });

    setGrouped(
      contents.reduce((acc, cur) => {
        const monthObj = acc.find((item) => item.month === cur.month);
        if (monthObj) {
          monthObj.contents.push({
            day: cur.day,
            movies: cur.movies, // Corrected variable name
          });
        } else {
          acc.push({
            month: cur.month,
            contents: [
              {
                day: cur.day,
                movies: cur.movies, // Corrected variable name
              },
            ],
          });
        }

        return acc;
      }, []).sort((a, b) => (parseInt(a.month, 10) < parseInt(b.month, 10) ? -1 : 1))
    );
  };

  return (
    <>
      {grouped.map((monthInfo) => (
        <div id="block" key={monthInfo.month}>
          <h1 className="month">{monthInfo.month}月</h1>
          <div className="day-list">
            {monthInfo.contents.map((dayInfo) => (
              <div className="day-block" key={dayInfo.day}>
                <div className="line">
                  <h2 className="day">{dayInfo.day}日</h2>
                </div>
                <div className="wrapper">
                  {dayInfo.movies.map((movieURL, index) => (
                    <div className="li-item" key={index}>
                      <video
                        onClick={() => clickVideo(movieURL)}
                        disablePictureInPicture
                      >
                        <source src={movieURL} type="video/webm" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))}
                </div>
                {/* Display total time if available */}
                {dayInfo.total_time && (
                  <h2 className="total-time">
                    合計時間: {dayInfo.total_time}時間
                  </h2>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Archives;
