/** @format */

import { Text, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Moon from "./Moon";
import ISS from "./ISS";

const Earth = ({ displacementScale }) => {
  const earthRef = useRef();

  const [earthTexture, earthNormalMap, earthSpecularMap, earthDisplacementMap] =
    useTexture([
      "/assets/2k_earth_daymap.jpg",
      "/assets/earth_normal.jpg",
      "/assets/earth_specular.jpg",
      "/assets/earth_displacement.jpg",
    ]);

  useFrame(() => {
    earthRef.current.rotation.y += 0.002;
  });
  return (
    <group>
      <mesh receiveShadow ref={earthRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial
          map={earthTexture}
          normalMap={earthNormalMap}
          specularMap={earthSpecularMap}
          shininess={1000}
          displacementMap={earthDisplacementMap}
          displacementScale={displacementScale}
        />
      </mesh>
      <Text
        position={[0, 4, -10]}
        fontSize={2}
        color="white"
        maxWidth={10}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
      >
        Github: rayanramazan
      </Text>
      <ISS />
      <Moon />
    </group>
  );
};

export default Earth;