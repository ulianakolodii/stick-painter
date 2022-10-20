import React, { useState, useEffect } from "react";
import "./App.css";
import {} from "../src/App.css";
import Canvas from "./components/canvas/canvas";

function App() {
  const [state, setState] = useState([
  ]);

  const [startingPoint, setStartingPoint] = useState(null);

  const handleMouseDown = (event) => {
    setStartingPoint({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
    handleMouseMove();
    console.log(event, "down");
  };

  const handleMouseMove = (event) => {
    const endPoint = {
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    };
    setState((prevState) =>
      prevState.concat({
        from: startingPoint,
        to: endPoint,
      })
    );
    console.log(event.clientX, "move");
  };

  const handleMouseUp = (event) => {

    console.log(event, "up");
  };

  const draw = (ctx) => {
    state.forEach(({ from, to }) => {
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();
    });
  };
  return (
    <div className="App">
      <Canvas
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        draw={draw}
      />
    </div>
  );
}

export default App;
