import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Progressbar.css";

function ProgressBar() {
  return (
    <div className="progresscontainer">
      <CircularProgress />
    </div>
  );
}

export default ProgressBar;
