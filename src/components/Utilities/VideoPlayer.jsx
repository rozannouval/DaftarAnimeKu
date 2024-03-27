"use client";
import YouTube from "react-youtube";

export default function VideoPlayer({ youtubeId }) {
//   const option = {
//     width: "300",
//     height: "250",
//   };
  return (
    <div>
      <YouTube
        videoId={youtubeId}
        onReady={(event) => event.target.pauseVideo()}
        className="w-full"
        onError={() => alert("Maaf, Video Bermasalah")}
      />
    </div>
  );
}
