import React from "react";
import "../styles/video.css";
import { Link } from "react-router-dom";

const Video = ({ title, thumbnail, id, deleteHandler }) => {
  return (
    <div className="video-container">
      <button className="delete-btn" onClick={() => deleteHandler(id)}>
        <i class="fas fa-trash-alt"></i> Delete
      </button>
      <Link to={`/video/${id}`}>
        <img src={thumbnail} alt={title} />
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default Video;
