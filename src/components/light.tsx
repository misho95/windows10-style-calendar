import { RefObject, useEffect, useState } from "react";
import styled from "styled-components";

type PropsType = {
  containerRef: RefObject<HTMLDivElement>;
};

const Light = ({ containerRef }: PropsType) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const trackMouseMovement = (e: MouseEvent) => {
    setMouseX(e.layerX);
    setMouseY(e.layerY);
  };

  useEffect(() => {
    if (containerRef.current === null) return;

    containerRef.current.addEventListener("mousemove", trackMouseMovement);
  }, []);

  useEffect(() => {
    console.log(mouseX, mouseY);
  }, [mouseX, mouseY]);

  return <StyledLight style={{ left: mouseX, top: mouseY }} />;
};

const StyledLight = styled.div`
  background-color: white;
  border-radius: 100%;
  width: 200px;
  height: 200px;
  position: absolute;
  z-index: 4;
  transform: translate(-50%, -50%);
`;

export default Light;
