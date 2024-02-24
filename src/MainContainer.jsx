/** @format */

import { OrbitControls, useHelper } from "@react-three/drei";
import AnimationStars from "./AnimationStars";
import Earth from "./Earth";
import { useRef } from "react";
import * as THREE from "three";

const MainContainer = () => {
  const directionLightRef = useRef();
  const directionLightRefTwo = useRef();
  useHelper(directionLightRef, THREE.DirectionalLightHelper, 1, "hotpink");
  useHelper(directionLightRefTwo, THREE.DirectionalLightHelper, 1, "hotpink");
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <OrbitControls />
      <AnimationStars />
      <directionalLight
        ref={directionLightRef}
        position={[0, 0, 10]}
        intensity={1}
      />
      <directionalLight ref={directionLightRefTwo} position={[0, 0, -10]} />
      <Earth />
    </>
  );
};

export default MainContainer;
