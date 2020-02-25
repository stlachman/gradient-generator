import React, { useState } from "react";

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};
const generateRandom = () => {
  let number1 = Math.floor(getRandomIntInclusive(0, 255));
  let number2 = Math.floor(getRandomIntInclusive(0, 255));
  let number3 = Math.floor(getRandomIntInclusive(0, 255));
  return [number1, number2, number3];
};

export default function() {
  const [color, setColor] = useState([
    generateRandom(),
    generateRandom(),
    generateRandom()
  ]);
  const [rotation, setRotation] = useState("right");

  const handleClick = e => {
    setColor([generateRandom(), generateRandom(), generateRandom()]);
  };

  const updateRotation = () => {
    if (rotation === "right") {
      setRotation("bottom");
    }
    if (rotation === "bottom") {
      setRotation("left");
    }
    if (rotation === "left") {
      setRotation("top");
    }
    if (rotation === "top") {
      setRotation("right");
    }
  };

  return (
    <main>
      <div
        style={{
          background: `rgba(0, 0, 0, 0) linear-gradient(to ${rotation}, rgb(${color[0][0]}, ${color[0][1]}, ${color[0][2]}), rgb(${color[1][0]}, ${color[1][1]}, ${color[1][2]}), rgb(${color[2][0]}, ${color[2][1]}, ${color[2][2]})) repeat scroll 0% 0%`
        }}
        className="gradient"
      ></div>
      <div>
        <button onClick={handleClick}>New Gradient</button>
        <button onClick={updateRotation}>Rotate Gradient</button>
      </div>
    </main>
  );
}
