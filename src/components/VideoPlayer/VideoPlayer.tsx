"use client";
import React, { useRef, useEffect } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <ReactPlayer
      url="/videos/video.mp4"
      playing={true}
      loop={true}
      muted={true}
      width={72}
      height={72}
    />
  );
};

export default VideoPlayer;
