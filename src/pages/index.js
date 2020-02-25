import React, { useState } from "react";
import Banner from "../components/banner";
import Button from "../components/button";

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
      <Banner color={color} rotation={rotation} />
      <div>
        <Button handleClick={handleClick} text={"New Gradient"} />
        <Button handleClick={updateRotation} text={"Rotate Gradient"} />
      </div>
    </main>
  );
}
