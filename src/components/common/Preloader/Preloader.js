import React from "react";
import preloader from "../../../assets/images/Ellipsis-1s-200px.svg";

let Preloader = (props) => {
  return (
    <div>
      <img src={preloader} alt="preload" />{" "}
    </div>
  );
};

export default Preloader;
