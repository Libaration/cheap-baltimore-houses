import React from "react";

const BackgroundImage = (props) => {
  return (
    <div
      className="bgfade"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1617957718614-8c23f060c2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3432&q=80)",
        filter: "brightness(0.8)",
        backgroundRepeat: "no-repeat",
        display: props.visible ? "block" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
    ></div>
  );
};

export default BackgroundImage;
