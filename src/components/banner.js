import React from "react";
import styled from "styled-components";

const Banner = styled.div`
  display: block;
  height: 60vh;
`;

export default ({ rotation, color, gradientType }) => {
  let gradientStyle =
    gradientType === "linear"
      ? `rgba(0, 0, 0, 0) linear-gradient(to ${rotation}, rgb(${color[0][0]}, ${color[0][1]}, ${color[0][2]}), rgb(${color[1][0]}, ${color[1][1]}, ${color[1][2]}), rgb(${color[2][0]}, ${color[2][1]}, ${color[2][2]})) repeat scroll 0% 0%`
      : `radial-gradient(circle, rgb(${color[0][0]}, ${color[0][1]}, ${color[0][2]}), rgb(${color[1][0]}, ${color[1][1]}, ${color[1][2]}), rgb(${color[2][0]}, ${color[2][1]}, ${color[2][2]})) repeat scroll 0% 0%`;
  return (
    <Banner
      style={{
        background: gradientStyle
      }}
    ></Banner>
  );
};
