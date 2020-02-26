import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Banner from "../components/banner";
import Modal from "../components/modal";
import Code from "../components/code";
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
  const [show, setShow] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const codeRef = useRef(null);

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

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  function copyToClipboard() {
    let text = codeRef.current.textContent;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyStatus("Copied 👍");
      })
      .catch(() => {
        setCopyStatus("Failed 💩");
      });
  }

  useEffect(() => {
    setTimeout(() => {
      setCopyStatus("");
    }, 750);
  }, [copyStatus]);

  return (
    <>
      <Modal show={show} setCopyStatus={setCopyStatus} handleClose={hideModal}>
        {copyStatus ? (
          <Flex>
            <h4>{copyStatus}</h4>
          </Flex>
        ) : (
          <Code codeRef={codeRef} color={color} rotation={rotation} />
        )}
        <Flex>
          <Button small text={"Copy Code"} handleClick={copyToClipboard} />
        </Flex>
      </Modal>
      <Layout>
        <Banner color={color} rotation={rotation} />
        <Flex>
          <Button handleClick={handleClick} text={"New Gradient"} />
          <Button handleClick={updateRotation} text={"Rotate Gradient"} />
          <Button handleClick={showModal} text={"Show CSS"} />
        </Flex>
      </Layout>
    </>
  );
}
