import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { API } from "../config/constants";
import "../styles/add.css";

const AddVideo = () => {
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=");
  const [batchUrl, setBatchUrl] = useState("https://www.youtube.com/watch?v=");
  const history = useHistory();

  const postVideo = (e) => {
    e.preventDefault();
    fetch(`${API}/video`, {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.type === "video") {
          history.push("/");
        } else {
          alert("Video was not added.");
        }
      });
  };

  const postBatch = (e) => {
    e.preventDefault();
    const videoArray = batchUrl.trim().split("\n");
    fetch(`${API}/videos`, {
      method: "POST",
      body: JSON.stringify({ videos: videoArray }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.type === "video") {
          history.push("/");
        } else {
          alert("Video was not added.");
        }
      });
  };

  return (
    <div>
      <h2>
        Add Videos To Your List, Or <Link to="/">Go Back</Link>
      </h2>
      <form onSubmit={postVideo} className="video-form">
        <label>
          Youtube URL:
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <input type="submit" value="Add a video" />
      </form>
      <form onSubmit={postBatch} className="video-form">
        <label>
          Youtube URLs (one video per line):
          <textarea
            type="url"
            value={batchUrl}
            rows={10}
            onChange={(e) => setBatchUrl(e.target.value)}
          ></textarea>
        </label>
        <input type="submit" value="Add multiple videos" />
      </form>
    </div>
  );
};

export default AddVideo;
