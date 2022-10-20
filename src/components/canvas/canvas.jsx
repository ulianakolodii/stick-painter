import "./styles.css";
import React from "react";
import useCanvas from "./useCanvas.js";

const Canvas = ({ draw, ...rest }) => {
  const canvasRef = useCanvas(draw);

  return <canvas className="canvas" ref={canvasRef} {...rest} />;
};

export default Canvas;
