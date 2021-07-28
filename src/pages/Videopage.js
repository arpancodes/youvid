import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { API } from "../config/constants";
import "../styles/videopage.css";

const Videopage = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState({});
  const [urlID, setUrlId] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoId)
      fetch(`${API}/video/${videoId}`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          const urlId = result.url.split("=")[1];
          console.log(urlId);
          setUrlId(urlId);
          setVideo(result);
          setIsLoading(false);
        });
  }, [videoId]);

  if (isLoading) return <Loading />;
  return (
    <div className="player-container">
      <Link to="/">
        <i className="fas fa-long-arrow-alt-left"></i> Go Back
      </Link>
      <iframe
        className="player"
        src={`https://www.youtube.com/embed/${urlID}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2>{video.title}</h2>
      <p>
        by <a href={video.author_url}>{video.author}</a>
      </p>
    </div>
  );
};

export default Videopage;
