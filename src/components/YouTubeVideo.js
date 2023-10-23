import React from 'react';

const YouTubeVideo = ({ videoId }) => {
  return (
    <div className="video-container">
      <iframe
        title="YouTube Video"
        width="700"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
