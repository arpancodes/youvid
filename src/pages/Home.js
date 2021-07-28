import React, { useState, useEffect } from "react";
import { API } from "../config/constants";
import { Link } from "react-router-dom";
import Video from "../components/Video";
import "../styles/home.css";
import Loading from "../components/Loading";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/videos`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setVideos(result);
        setIsLoading(false);
      });
  }, []);

  const deleteVideo = (id) => {
    fetch(`${API}/video/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((res) => {
        setVideos(videos.filter((video) => video._id !== id));
      });
  };

  const deleteAllVideo = () => {
    fetch(`${API}/videos`, { method: "DELETE" })
      .then((res) => res.json())
      .then((res) => {
        setVideos([]);
      });
  };

  if (isLoading) return <Loading />;
  return (
    <div>
      <p style={{ textAlign: "center" }}>
        The collection of your favourite videos, <Link to="/add">add more</Link>
      </p>
      <div className="delete-all">
        <button onClick={deleteAllVideo}>Delete All Videos</button>
      </div>
      <div className="videos">
        {videos.length > 0 ? (
          videos.map((video) => (
            <Video
              key={video._id}
              title={video.title}
              thumbnail={video.thumbnail}
              id={video._id}
              deleteHandler={deleteVideo}
            />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>
            There are no videos, start adding <Link to="/add">here</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
