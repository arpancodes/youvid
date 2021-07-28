import React from "react";
import "../styles/loading.css";

const Loading = ({ title = "Loading..." }) => {
  return <div className="loading">{title}</div>;
};

export default Loading;
