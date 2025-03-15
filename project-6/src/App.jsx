// Video Player

import { useState } from "react";

const videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};

const videoNames = Object.keys(videos);

function App() {
  const [videoUrl, setVideoUrl] = useState(videos.deer);

  return (
    <>
      <div className="min-h-screen bg-gray-700 text-white text-2xl font-semibold">
        <div className="container flex flex-col items-center justify-start mx-auto p-2 min-h-screen bg-gray-600 gap-6">
          <div>Choose a Video</div>
          {videoNames.map((videoName) => (
            <div key={videoName} className="flex items-center">
              <input
                id={videoName}
                type="radio"
                name="video"
                value={videos[videoUrl]}
                checked={videoUrl === videos[videoName]}
                className="size-6 mr-4"
                onChange={(e) => setVideoUrl(videos[e.target.id])}
              />
              <label htmlFor={videoName}>{videoName}</label>
            </div>
          ))}
          <video
            key={videoUrl}
            className="mt-8 border-4 border-white rounded-lg"
            controls
            width="400"
          >
            <source src={`${videoUrl}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

export default App;
