import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
