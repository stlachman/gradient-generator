import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Banner from "../components/banner";
import Button from "../components/button";
import { generateRandom } from "../utils/index";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
`;

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
    <Layout>
      <Banner color={color} rotation={rotation} />
      <Flex>
        <Button handleClick={handleClick} text={"New Gradient"} />
        <Button handleClick={updateRotation} text={"Rotate Gradient"} />
      </Flex>
    </Layout>
  );
}
